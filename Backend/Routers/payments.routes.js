const { celebrate } = require("celebrate");
const express = require("express");
const { initialize_User_Payment } = require("../Controllers/payments.controller");

const router = express.Router();

router.post("/", initialize_User_Payment );

module.exports = router;

