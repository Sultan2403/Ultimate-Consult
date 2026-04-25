const transactionsCollection = require("../DB/Models/transactions.model");
const { getIO } = require("../Utils/Connections/sockets.js");

const handleChargeSuccess = async (reference) => {
  try {
    // Update transaction in db
    const transaction = await transactionsCollection.findOneAndUpdate(
      { reference, status: "Processing" },
      { status: "Successful" },
      { new: true },
    );

    if (transaction) {
      const io = getIO();
      io.to(transaction.accessToken).emit("payment.success");
    } else {
      throw new Error("Failed to update transaction");
    }
  } catch (error) {
    throw new Error("Error processing successful charge: " + error.message);
  }
};

const handleChargeFailure = async (reference) => {
  try {
    // Marks transaction as failed in db
    const transaction = await transactionsCollection.findOneAndUpdate(
      { reference, status: "Processing" },
      { status: "Failed" },
      { new: true },
    );

    if (transaction) {
      const io = getIO();
      io.to(transaction.accessToken).emit("payment.failure");
    } else {
      throw new Error("Failed to update transaction");
    }
  } catch (error) {
    throw new Error("Error processing failed charge: " + error.message);
  }
};

module.exports = { handleChargeSuccess, handleChargeFailure };
