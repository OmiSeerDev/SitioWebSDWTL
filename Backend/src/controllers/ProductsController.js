const express = require("express");
const createProduct = require("../services/Create/CreateProduct");
const deleteProduct = require("../services/Delete/DeleteProduct");
const validate = require("../utilities/ProductValidator");

const router = new express.Router();
router.post("/", async (req, res) => {
  const { body } = req;
  const validProduct = await validate(body);
  if (!validProduct) {
    return "Not a valid product";
  }

  const product = await createProduct(body);
  return res.json(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await deleteProduct(id);
  return res.json(product.map);
});

module.exports = router;
