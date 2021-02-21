const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const PetOwner = require("../models/petOwner");
const Pet = require("../models/pet");

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
  res.status(201).json({ success: true, data: petOwner });
});

// @desc    Get owner by id
// @route   GET /api/v1/petOwners/:id
exports.getOwner = asyncHandler(async (req, res, next) => {
  const petOwner = await PetOwner.findById(req.params.id);
  if (!petOwner) {
    return next(
      new ErrorResponse(`Owner not found with id of ${req.params.id}`, 404)
    );
  } else {
    res.status(200).json({ success: true, data: petOwner });
  }
});

// @desc    Update owner by id
// @route   PUT /api/v1/petOwners/:id
exports.updateOwner = asyncHandler(async (req, res, next) => {
  const petOwner = await PetOwner.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!petOwner) {
    return next(
      new ErrorResponse(`Owner not found with id of ${req.params.id}`)
    );
  } else {
    res.status(200).json({ success: true, data: petOwner });
  }
});

// @desc    Delete owner by id
// @route   DELETE /api/v1/petOwners/:id
exports.deleteOwner = asyncHandler(async (req, res, next) => {
  const petOwner = await PetOwner.findByIdAndDelete(req.params.id);
  if (!petOwner) {
    return next(
      new ErrorResponse(`Owner not found with id of ${req.params.id}`)
    );
  } else {
    res.status(200).json({
      success: true,
      data: {},
      message: `Owner with id of ${req.params.id} was deleted.`,
    });
  }
});

// @desc    Get pets of an owner
// @route   GET /api/v1/petOwners/pets/:id
exports.getPetsOfOwner = asyncHandler(async (req, res, next) => {
  const petOwner = await PetOwner.findById(req.params.id);
  if (!petOwner) {
    return next(
      new ErrorResponse(`Owner not found with id of ${req.params.id}`, 404)
    );
  } else {
    const pets = await Pet.find({ ownerID: req.params.id });
    if (!pets) {
      return next(
        new ErrorResponse(`Pet not found with id of ${req.params.id}`, 404)
      );
    } else {
      res.status(200).json({ success: true, data: { pets: pets } });
    }
  }
});
