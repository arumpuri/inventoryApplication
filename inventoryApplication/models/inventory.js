const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  date: { type: Date },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  QuantityAvailable: { type: Number },
  MinimumStockLevel: { type: Number },
  MaximumStockLevel: { type: Number },
  ReorderPoint: { type: Number },
});

// Virtual for author's URL
InventorySchema.virtual("url").get(function () {
  return `/inventory/inventory/${this._id}`;
});

// Export model
module.exports = mongoose.model("Inventory", InventorySchema);
