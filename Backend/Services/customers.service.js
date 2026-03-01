const mongoose = require("mongoose");
const transactionsCollection = require("../DB/Models/transactions.model");
const customersCollection = require("../DB/Models/customers.model");

/**
 * Create a customer atomically with transaction.
 * Returns an object with { success, customer?, error? }
 */
async function createCustomerWithTransaction({ accessToken, customerData }) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // 1️⃣ Mark the transaction token as used
    const updatedTransaction = await transactionsCollection.findOneAndUpdate(
      { accessToken, status: "Successful", tokenUsed: false },
      { tokenUsed: true },
      { new: true, session },
    );

    if (!updatedTransaction) {
      // No transaction found or already used
      await session.abortTransaction();
      return {
        success: false,
        error: "Transaction not found or token already used",
      };
    }

    // 2️⃣ Prepare customer data
    const data = {
      ...customerData,
      consultationStatus: "Pending",
      paymentReference: updatedTransaction.reference,
    };

    // 3️⃣ Create the customer in the same transaction
    await customersCollection.create([data], { session });

    // 4️⃣ Commit transaction
    await session.commitTransaction();

    return {
      success: true,
      message:
        "Your consultation request has been successfully processed. We will reach out to you within 24 hours",
    };
  } catch (error) {
    // Roll back transaction on error
    await session.abortTransaction();
    return { success: false, error };
  } finally {
    // ✅ always close the session
    session.endSession();
  }
}

const verifyConsultationAccessToken = async ({accessToken}) => {
  try {
    const transaction = await transactionsCollection.findOne({
      accessToken,
      tokenUsed: false,
      status: "Successful",
    });

    if (!transaction) {
      return {
        success: false,
        message: "Invalid or expired consultation access token",
      };
    }

    return {
      success: true,
      supportReference: transaction.reference
    };
  } catch (error) {
    console.error("Error verifying consultation access token:", error);
    return {
      success: false,
      message: "An error occurred while verifying the token",
    };
  }
};

module.exports = {
  createCustomerWithTransaction,
  verifyConsultationAccessToken,
};
