const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
  sales_number: { type: Number },
  sales_date: { type: Date },
});

// Virtual for author's URL
DeliverySchema.virtual("url").get(function () {
  return `/inventory/delivery/${this._id}`;
});

// Export model
module.exports = mongoose.model("Delivery", DeliverySchema);
