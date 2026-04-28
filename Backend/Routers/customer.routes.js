const { celebrate } = require("celebrate");
const express = require("express");
const {
  addNewCustomer,
  verifyConsultationAccessTokenController,
  getCustomers,
  updateConsultationStatusController,
} = require("../Controllers/customers.controller");
const {
  createCustomerSchema,
  updateConsultationStatusBodySchema,
} = require("../Schemas/customers.schema");
const authMiddleware = require("../Middlewares/auth");

const router = express.Router();

router.get("/verify/:token", verifyConsultationAccessTokenController);
router.post("/", celebrate({ body: createCustomerSchema }), addNewCustomer);
router.get("/", authMiddleware, getCustomers);
router.patch(
  "/:id",
  authMiddleware,
  celebrate({ body: updateConsultationStatusBodySchema }),
  updateConsultationStatusController,
);

module.exports = router;
