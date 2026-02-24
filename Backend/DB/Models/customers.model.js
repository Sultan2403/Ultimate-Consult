const mongoose = require("mongoose");
const validator = require("validator");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

const CUSTOMER_CONSULTATION_STATUSES = ["Pending", "Completed", "Cancelled"];

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid email address",
      },
    },

    phoneNumber: {
      type: String,
      required: false,
      trim: true,
      validate: {
        validator: (value) => {
          const phone = parsePhoneNumberFromString(value);
          return phone ? phone.isValid() : false;
        },
        message: "Invalid phone number",
      },
    },

    consultationStatus: {
      type: String,
      enum: CUSTOMER_CONSULTATION_STATUSES,
      default: "Pending",
      required: true
    },

  },
  {
    timestamps: true,
    strict: true,
  },
);

const Customer = mongoose.model("Customer", customerSchema, "customers");

module.exports = Customer;
