const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    username: {
      type: String,
      required: true,
      trim: true,
    },

    refreshTokenHash: {
      type: String,
      select: false,
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);

AdminSchema.set("toJSON", {
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

const Admin = mongoose.model("Admin", AdminSchema, "admins");

module.exports = Admin;
