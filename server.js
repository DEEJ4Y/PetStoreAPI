require("dotenv").config({ path: "./config/config.env" });
require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

connectDB();

// Route files
const petOwner = require("./routes/petOwner");

const app = express();

// Body Parser
app.use(express.json());

// Mount routers
app.use("/api/v1/petOwners", petOwner);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT;
const server = app.listen(
  PORT,
  console.log(`Server is running on port ${PORT}`)
);
