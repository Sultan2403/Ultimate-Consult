const { celebrate } = require("celebrate");
const express = require("express");
const { getCustomers } = require("../Controllers/customers.controller");

const router = express.Router();

router.get("/", getCustomers);

module.exports = router;

