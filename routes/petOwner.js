const { Router } = require("express");
const express = require("express");

const {
  getOwners,
  // getOwner,
  createOwner,
  // updateOwner,
  // deleteOwner,
} = require("../controllers/petOwner");

const router = express.Router();

router.route("/api/v1/petOwners").get(getOwners).post(createOwner);

// router.route("/:id").get(getOwner).put(updateOwner).delete(deleteOwner);

module.exports = router;
