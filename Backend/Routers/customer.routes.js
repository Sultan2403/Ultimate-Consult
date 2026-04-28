const { celebrate } = require("celebrate");
const express = require("express");
const {
  addNewCustomer,
  verifyConsultationAccessTokenController,
  getCustomers,
  updateConsultationStatusController,
  getOneConsultationController,
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
router.get("/:id", authMiddleware, getOneConsultationController);
router.patch(
  "/:id",
  authMiddleware,
  celebrate({ body: updateConsultationStatusBodySchema }),
  updateConsultationStatusController,
);

module.exports = router;
