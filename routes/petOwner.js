const { Router } = require("express");
const express = require("express");

const {
  getOwners,
  getOwner,
  getPetsOfOwner,
  createOwner,
  updateOwner,
  deleteOwner,
} = require("../controllers/petOwner");

const router = express.Router();

router.route("/").get(getOwners).post(createOwner);

router.route("/pets/:id").get(getPetsOfOwner);

router.route("/:id").get(getOwner).put(updateOwner).delete(deleteOwner);

module.exports = router;
