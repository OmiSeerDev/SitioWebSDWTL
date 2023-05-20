const express = require("express");
const createCart = require("../services/Create/CreateCart");

const router = new express.Router();

router.post("/", async (req, res) => {
  const { body } = req;

  const cart = await createCart(body);
  return res.json(cart);
});

module.exports = router;
