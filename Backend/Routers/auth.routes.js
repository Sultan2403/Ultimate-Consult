const { celebrate } = require("celebrate");
const express = require("express");

const { loginAdmin, refreshTokenController } = require("../Controllers/auth.controller");
const adminLoginSchema = require("../Schemas/admin.schema");
const { refreshTokenSchema } = require("../Schemas/auth.schema");


router.post("/refresh", celebrate({ body: refreshTokenSchema }), refreshTokenController);
router.post("/login", celebrate({ body: adminLoginSchema }), loginAdmin);

const router = express.Router();
