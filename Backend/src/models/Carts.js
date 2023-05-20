const mongoose = require("mongoose");
const { ObjectId } = require("mongoose").Types;
const Products = require("./Products");
const Users = require("./Users");

class Cart {
  static async getById(_id) {
    return this.findOne({ _id });
  }
}
const CartsSchema = new mongoose.Schema(
  {
    _id: { type: ObjectId, required: true, auto: true },
    user: { type: ObjectId, ref: Users, required: true },
    createdAt: { type: Date, required: false, default: new Date() },
    total: { type: Number, required: true, default: 0 },
    products: {
      type: [ObjectId],
      ref: Products,
      required: false,
      default: [],
    },
    saleMade: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: false,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

CartsSchema.loadClass(Cart);

module.exports = mongoose.model("Cart", CartsSchema, "carts");
