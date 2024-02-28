const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderDetailSchema = new Schema({
  date: { type: Date },
  expected_date: { type: Date },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  order_quantity: { type: Number },
});

// Virtual for author's URL
OrderDetailSchema.virtual("url").get(function () {
  return `/inventory/orderdetail/${this._id}`;
});

// Export model
module.exports = mongoose.model("OrderDetail", OrderDetailSchema);
