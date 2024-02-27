const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  product_code: { type: Number },
  barcode: { type: Number },
  product_name: { type: String, required: true, maxLength: 100 },
  product_description: { type: String, required: true, maxLength: 500 },
  product_category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  reorder_quantity: { type: Number },
});

// Virtual for author's URL
ProductSchema.virtual("url").get(function () {
  return `/inventory/product/${this._id}`;
});

// Export model
module.exports = mongoose.model("Product", ProductSchema);
