import express from "express";
import verifyToken from "../middleware/auth.js";
import {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
  toggleFavorite,
  toggleWishlist
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", verifyToken, createBook);
router.get("/", verifyToken, getBooks);
router.put("/:id", verifyToken, updateBook);
router.delete("/:id", verifyToken, deleteBook);
router.patch("/:id/favorite", verifyToken, toggleFavorite);
router.patch("/:id/wishlist", verifyToken, toggleWishlist);

export default router;
