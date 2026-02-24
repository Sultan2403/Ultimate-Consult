const { celebrate } = require("celebrate");
const express = require("express");
const { addNewCustomer } = require("../Controllers/customers.controller");
const { customerSchema } = require("../Schemas/customers.schema");

const router = express.Router();

router.post("/", celebrate({ body: customerSchema }), addNewCustomer)

module.exports = router;
