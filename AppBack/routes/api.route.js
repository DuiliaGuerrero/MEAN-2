import express  from "express";
import usersRoutes from "./users.route.js";
import goalsRoutes from "./goals.route.js"

const router = express.Router();

router.use("", usersRoutes);
router.use("", checkToken, goalsRoutes);