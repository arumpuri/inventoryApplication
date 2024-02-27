const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeliveryDetailSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  ExpectedDate: { type: Date },
  ActualDate: { type: Date },
});

// Virtual for author's URL
DeliveryDetailSchema.virtual("url").get(function () {
  return `/inventory/deliverydetail/${this._id}`;
});

// Export model
module.exports = mongoose.model("DeliveryDetail", DeliveryDetailSchema);
