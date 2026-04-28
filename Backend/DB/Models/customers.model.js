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
      required: true,
    },

    businessName: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
      minLength: 50
    },

    // paymentReference: {
    //   type: String,
    //   required: true,
    //   unique: true
    // },
  },
  {
    timestamps: true,
    strict: true,
  },
);

customerSchema.set("toJSON", {
  transform: (doc, obj) => {
    obj.id = obj._id.toString(); // convert ObjectId to string
    delete obj._id; // remove internal _id
    delete obj.__v; // remove version key
    delete obj.password; // remove password hash
    delete obj.createdAt; // optional
    delete obj.updatedAt; // optional
    return obj;
  },
});

const Customer = mongoose.model("Customer", customerSchema, "customers");

module.exports = Customer;
