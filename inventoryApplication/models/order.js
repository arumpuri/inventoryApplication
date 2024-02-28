const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  date: { type: Date },
  order_quantity: { type: Number },
});

// Virtual for author's URL
OrderSchema.virtual("url").get(function () {
  return `/inventory/order/${this._id}`;
});

// Export model
module.exports = mongoose.model("Order", OrderSchema);
