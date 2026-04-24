const { celebrate } = require("celebrate");
const express = require("express");
const {
  addNewCustomer,
  verifyConsultationAccessTokenController,
} = require("../Controllers/customers.controller");
const { createCustomerSchema } = require("../Schemas/customers.schema");

const router = express.Router();

router.get("/verify/:token", verifyConsultationAccessTokenController);
router.post("/", celebrate({ body: createCustomerSchema }), addNewCustomer);

module.exports = router;
