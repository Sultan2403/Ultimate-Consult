const customersCollection = require("../DB/Models/customers.model");
const transactionsCollection = require("../DB/Models/transactions.model");

const verifyConsultationAccessToken = async (req, res) => {
  const accessToken = req.params.token;

  try {
    const transaction = await transactionsCollection.findOne({
      accessToken,
      tokenUsed: false,
      status: "Successful"
    });

    if (!transaction) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired consultation access token",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Token is valid",
      supportReference: transaction.supportReference,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occured while verifying token",
    });
  }
};

const addNewCustomer = async (req, res) => {
  const consultationStatus = "Pending";
  const accessToken = req.params.token;
  console.log("request body",req.body)

  try {
    // Try and find and update transaction in db

    // Introduce rabbitmq here for true acidity

    const updatedTransaction = await transactionsCollection.findOneAndUpdate(
      { accessToken, status: "Successful", tokenUsed: false },
      { tokenUsed: true },
      { new: true },
    );

    if (!updatedTransaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found or token already used",
      });
    }

    const data = {
      ...req.body,
      consultationStatus,
      paymentReference: updatedTransaction.reference,
    };

    console.log(data)

    await customersCollection.create(data);
    res
      .status(201)
      .json({
        success: true,
        message:
          "Your request was successful. We'll get in touch with you within 24 hours",
      });
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      message: "An error occured while processing your request",
      error: error.message,
    });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await customersCollection.find();
    res.status(200).json({ success: true, customers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred" });
  }
};

module.exports = {
  addNewCustomer,
  getCustomers,
  verifyConsultationAccessToken,
};
