const { Router } = require("express");
const express = require("express");

const {
  getPets,
  getPet,
  createPet,
  updatePet,
  deletePet,
} = require("../controllers/pet");

const router = express.Router();

router.route("/").get(getPets).post(createPet);

router.route("/:id").get(getPet).put(updatePet).delete(deletePet);

module.exports = router;
