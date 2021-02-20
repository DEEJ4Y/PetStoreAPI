require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/db");

connectDB();
