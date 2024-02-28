const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  provider_name: { type: String, required: true, maxLength: 100 },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  provider_address: { type: String, required: true, maxLength: 100 },
  provider_city: { type: String, required: true, maxLength: 50 },
});

// Virtual for author's URL
ProviderSchema.virtual("url").get(function () {
  return `/inventory/provider/${this._id}`;
});

// Export model
module.exports = mongoose.model("Provider", ProviderSchema);
