require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/db");

connectDB();

const app = express();

// Body Parser
app.use(express.json());

const PORT = process.env.PORT;
const server = app.listen(
  PORT,
  console.log(`Server is running on port ${PORT}`)
);
