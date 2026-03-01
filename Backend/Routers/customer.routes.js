const { celebrate } = require("celebrate");
const express = require("express");
const {
  addNewCustomer,
  verifyConsultationAccessToken,
} = require("../Controllers/customers.controller");
const { customerSchema } = require("../Schemas/customers.schema");

const router = express.Router();

router.get("/verify/:token", verifyConsultationAccessToken);
router.post("/:token", celebrate({ body: customerSchema }), addNewCustomer);

module.exports = router;
