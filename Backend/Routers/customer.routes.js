const { celebrate } = require("celebrate");
const express = require("express");
const { getCustomers, addNewCustomer } = require("../Controllers/customers.controller");
const { customerSchema } = require("../Schemas/customers.schema");

const router = express.Router();

router.get("/", getCustomers)
router.post("/", celebrate({ body: customerSchema }), addNewCustomer)

module.exports = router;
