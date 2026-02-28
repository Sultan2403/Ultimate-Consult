const customersCollection = require("../DB/Models/customers.model");
const transactionsCollection = require("../DB/Models/transactions.model");

const addNewCustomer = async (req, res) => {
  const consultationStatus = "Pending";
  const accessToken = req.params.token;
  const data = { ...req.body, consultationStatus };


  try {
    // Try and find and update transaction in db

    const updatedTransaction = await transactionsCollection.findOneAndUpdate(
      { accessToken, status: "Processing" },
      { tokenUsed: true },
      { new: true },
    );

    if (!updatedTransaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found or token already used",
      });
    }

    await customersCollection.create(data);
    res
      .status(201)
      .json({
        success: true,
        message:
          "Your request was successful. We'll get in touch with you within 24 hours",
      });
  } catch (error) {
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
};
