const express = require("express");
const router = express.Router();
let PaymentService = require("../services/PaymentService");
const PaymentInstance = new PaymentService();
router.get("/", function (req, res, next) {
  return res.json({
    "/payment": "generates a payment link",
  });
});

router.get("/payment", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});

module.exports = router;
