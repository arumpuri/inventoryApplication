const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  customer_address: { type: String, required: true, maxLength: 100 },
  customer_city: { type: String, required: true, maxLength: 50 },
});

// Virtual for author's full name
CustomerSchema.virtual("name").get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }

  return fullname;
});

// Virtual for author's URL
CustomerSchema.virtual("url").get(function () {
  return `/inventory/customer/${this._id}`;
});

// Export model
module.exports = mongoose.model("Customer", CustomerSchema);