const { celebrate } = require("celebrate");
const express = require("express");

const { loginAdmin } = require("../Controllers/auth.controller");
const adminLoginSchema = require("../Schemas/admin.schema");


router.post("/login", celebrate({ body: adminLoginSchema }), loginAdmin);

const router = express.Router();
