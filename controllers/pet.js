const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Pet = require("../models/pet");

// @desc    GET all pets
// @route   GET /api/v1/pets
exports.getPets = asyncHandler(async (req, res, next) => {
  const pets = await Pet.find();
  res.status(200).json({ success: true, data: pets });
});

// @desc    CREATE a pet
// @route   POST /api/v1/pets
exports.createPet = asyncHandler(async (req, res, next) => {
  const pet = await Pet.create(req.body);
  res.status(201).json({ success: true, data: pet });
});

// @desc    GET a single pet by id
// @route   GET /api/v1/pets/:id
exports.getPet = asyncHandler(async (req, res, next) => {
  const pet = await Pet.findById(req.params.id);
  if (!pet) {
    return next(
      new ErrorResponse(`Pet not found with id of ${req.params.id}`),
      404
    );
  } else {
    res.status(200).json({ success: true, data: pet });
  }
});

// @desc    UPDATE a pet by id
// @route   PUT /api/v1/pets/:id
exports.updatePet = asyncHandler(async (req, res, next) => {
  const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!pet) {
    return next(
      new ErrorResponse(`Pet not found with id of ${req.params.id}`),
      404
    );
  } else {
    res.status(200).json({ success: true, data: pet });
  }
});

// @desc    DELETE a pet by id
// @route   DELETE /api/v1/pets/:id
exports.deletePet = asyncHandler(async (req, res, next) => {
  const pet = await Pet.findOneAndDelete(req.params.id);
  if (!pet) {
    return next(
      new ErrorResponse(`Pet not found with id of ${req.params.id}`),
      404
    );
  } else {
    res.status(200).json({
      success: true,
      data: {},
      message: `Pet with id of ${req.params.id} was deleted`,
    });
  }
});
