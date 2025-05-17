const express = require("express");
const {
  registerUser,
  login,
  logout,
} = require("../controllers/authControllers");

const jwt = require("jsonwebtoken");
const authRoutes = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "yourSuperSecretKey";

authRoutes.post("/register", registerUser);
authRoutes.post("/login", login);
authRoutes.get("/logout", logout);

module.exports = authRoutes;
