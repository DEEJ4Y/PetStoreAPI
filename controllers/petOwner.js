const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const PetOwner = require("../models/petOwner");

// @desc    Get all pet owners
// @route   GET /api/v1/petOwners
exports.getOwners = asyncHandler(async (req, res, next) => {
  const owners = await PetOwner.find();

  res.status(200).json({ success: true, data: owners });
});

// @desc    Create new pet owner
// @route   POST /api/v1/petOwners
exports.createOwner = asyncHandler(async (req, res, next) => {
  const petOwner = await PetOwner.create(req.body);
  res.status(200).json({ success: true, data: petOwner });
});
