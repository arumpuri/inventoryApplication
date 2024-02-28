const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  date: { type: Date },
  inventory: {
    type: Schema.Types.ObjectId,
    ref: "Inventory",
    required: true,
  },
  warehouse: { type: String, required: true, maxLength: 100 },
  location_name: { type: String, required: true, maxLength: 100 },
  location_address: { type: String, required: true, maxLength: 100 },
});

// Virtual for author's URL
LocationSchema.virtual("url").get(function () {
  return `/inventory/location/${this._id}`;
});

// Export model
module.exports = mongoose.model("Location", LocationSchema);
