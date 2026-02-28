const mongoose = require("mongoose");

const TRANSACTION_STATUSES = ["Processing", "Failed", "Successful"];

const transactionSchema = new mongoose.Schema(
  {
    reference: {
      type: String,
      required: true,
      unique: true,
    },

    status: {
      type: String,
      default: "Processing",
      enum: TRANSACTION_STATUSES,
      required: true,
    },

    accessToken: {
      type: String,
      required: true
    },

    tokenUsed: {
      type: Boolean,
      required: true,
      default: false
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);

const Transaction = mongoose.model(
  "Transaction",
  transactionSchema,
  "transactions",
);

module.exports = Transaction;
