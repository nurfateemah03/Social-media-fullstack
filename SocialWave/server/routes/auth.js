import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.route("/login")
  .get((req, res) => {
    // Handle GET request for login page (if needed)
    res.send("Login page");
  })
  .post(login);

export default router;
