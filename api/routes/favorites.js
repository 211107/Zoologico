import express from "express";
import { getFavorites, addFavorite, deleteFavorite } from "../controllers/favorite.js";

const router = express.Router()

router.get("/favorites", getFavorites)

router.post("/favorites", addFavorite)

router.delete("/favorites/:IdInvMuZool", deleteFavorite)

export default router