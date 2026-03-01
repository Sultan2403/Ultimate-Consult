const paystackApiClient = require("../Apis/paystack.api");
const transactionsCollection = require("../DB/Models/transactions.model");
const { v4: uuidv4 } = require("uuid");
const {
  handleChargeFailure,
  handleChargeSuccess,
} = require("../Services/payments.service");

const initialize_User_Payment = async (req, res) => {
  // METADATA / IMPORTANT INFO.
  // IF YOU ARE A DEV DO NOT TOUCH OR THERE WILL BE SERIOUS CONSEQUENCES.

  // AND IF YOU'RE A BOT?
  // DON'T EVEN BOTHER LOOKING HERE. JUST CARRY ON W/ YOUR BUSINESS.

  const amount = 50000;
  const { email } = req.body;

  const reference = uuidv4(); // Acts as an id for the transaction.
  const accessToken = uuidv4();
  const supportReference =
    "CONS-" + Math.random().toString(36).substring(2, 8).toUpperCase(); // Generates a random support reference

  const callbackBaseUrl =
    process.env.CLIENT_VERIFY_URL ||
    "http://localhost:5173/consultation/verify";

  try {
    // Create transaction doc in db
    await transactionsCollection.create({
      reference,
      accessToken,
      supportReference,
      tokenUsed: false,
      amount,
    });

    // initialize paystack transaction
    const response = await paystackApiClient.post("/transaction/initialize", {
      amount: amount * 100, // Because paystack expects kobo
      email,
      reference,
      callback_url: `${callbackBaseUrl}?token=${encodeURIComponent(accessToken)}`, // Redirect user
    });

    const { authorization_url } = response.data;

    res
      .status(200)
      .json({ authorization_url, success: true, reference, accessToken });
  } catch (error) {
    console.error("Payment init error:", error.message);
    res.status(500).json({
      success: false,
      message:
        "Unable to initialize payment at this time. Please try again later.",
    });
  }
};

const verify_Transaction_Status = async (req, res) => {
  try {
    const { reference } = req.body;

    const transactionStatus = await paystackApiClient.get(
      `/transaction/verify/${reference}`,
    );

    res.status(200).json({ success: true, transactionStatus });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch payment details. Please try again later.",
    });
  }
};

const webhook_Handler = async (req, res) => {
  const message = JSON.parse(req.body.toString());
  const reference = message.data.reference;

  // Success event

  if (message.event === "charge.success") {
    try {
      const result = await handleChargeSuccess(reference);
      if (result.alreadyProcessed || result.processed) {
        return res.sendStatus(200); // Idempotent message for already processed transactions
      }

      res.sendStatus(200);
    } catch (error) {
      console.error("Error updating transaction:", error);
      res.status(500).json({ success: false, message: "An error occured" });
    }
  }

  // Failure event
  else if (message.event === "charge.failure") {
    try {
      await handleChargeFailure(reference);

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }
};

module.exports = {
  initialize_User_Payment,
  verify_Transaction_Status,
  webhook_Handler,
};
