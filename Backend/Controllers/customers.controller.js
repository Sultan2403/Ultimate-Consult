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

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const updatedTransaction =
      await transactionsCollection.findOneAndUpdate(
        { accessToken, status: "Successful", tokenUsed: false },
        { tokenUsed: true },
        { new: true, session }
      );

    if (!updatedTransaction) {
      await session.abortTransaction();
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

    await customersCollection.create([data], { session });

    await session.commitTransaction();

    res.status(201).json({
      success: true,
      message:
        "Your request was successful. We'll get in touch with you within 24 hours",
    });
  } catch (error) {
    await session.abortTransaction();
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your request",
    });
  } finally {
    session.endSession();
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
