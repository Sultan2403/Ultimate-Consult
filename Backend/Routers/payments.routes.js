const { celebrate } = require("celebrate");
const express = require("express");
const {
  initialize_User_Payment,
} = require("../Controllers/payments.controller");
const { paymentInitSchema } = require("../Schemas/payments.schema");

const router = express.Router();

router.post(
  "/",
  celebrate({ body: paymentInitSchema }),
  initialize_User_Payment,
);

module.exports = router;
