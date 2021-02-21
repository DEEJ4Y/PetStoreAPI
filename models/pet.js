const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      maxlength: [100, "Name cannot be longer than 100 characters."],
    },
    animal: {
      type: String,
      required: [true, "Please add an animal name"],
      trim: true,
      maxlength: [100, "Animal type cannot exceed 100 characters"],
    },
    species: {
      type: String,
      trim: true,
      maxlength: [200, "Species name cannot be longer than 200 characters."],
    },
    breed: {
      type: String,
      trim: true,
      required: true,
    },
    ownerName: {
      type: String,
    },
    ownerID: {
      type: String,
    },
    ownerType: {
      type: String,
    },
    ownerSince: {
      type: Date,
    },
    forAdoption: { type: Boolean },
    price: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Pet", PetSchema);
