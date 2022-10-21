import express from "express";
import { searchUser } from "../controllers/search.controllers.js";

const router = express.Router();

router.get("/search", searchUser);

export default router;
