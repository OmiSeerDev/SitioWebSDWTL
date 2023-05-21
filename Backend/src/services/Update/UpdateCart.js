const Carts = require("../../models/Carts");
const Products = require("../../models/Products");
const { ObjectId } = require("mongoose").Types;

const UPDATE_CART_FIELDS = "products";

const updateCart = async (id, prod_id) => {
  const cart = await Carts.getById(new ObjectId(id));
  const product = await Products.getById(prod_id);

  cart?.products.push(product);

  return cart;
};

module.exports = updateCart;
