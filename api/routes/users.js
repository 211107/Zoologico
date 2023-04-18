import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUser)

router.put("/:IdInvMuZool", updateUser)

router.delete("/:IdInvMuZool", deleteUser)

export default router