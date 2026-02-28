const transactionsCollection = require("../DB/Models/transactions.model");
const usersCollection = require("../DB/Models/users.model");

const handleChargeSuccess = async (reference) => {
  try {
    // Update transaction in db
    const updated_Transacation = await transactionsCollection.findOneAndUpdate(
      { reference, status: "Processing" },
      { status: "Successful" },
      { new: true },
    );

    if (!updated_Transacation) {
      return { alreadyProcessed: true }; // Transaction was already processed or not found
    }

    return { processed: true };
  } catch (error) {
    throw new Error("Error processing successful charge: " + error.message);
  }
};

const handleChargeFailure = async (reference) => {
  try {
    // Marks transaction as failed in db
    await transactionsCollection.findOneAndUpdate(
      { reference, status: "Processing" },
      { status: "Failed" },
      { new: true },
    );
  } catch (error) {
    throw new Error("Error processing failed charge: " + error.message);
  }
};

module.exports = { handleChargeSuccess, handleChargeFailure };
