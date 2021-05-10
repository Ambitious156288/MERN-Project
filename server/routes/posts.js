import express from "express";
import {
  getAll,
  create,
  update,
  remove,
  likeOne,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", auth, create);
router.patch("/:id", auth, update);
router.delete("/:id", auth, remove);
router.patch("/:id/likeOne", auth, likeOne);

export default router;
