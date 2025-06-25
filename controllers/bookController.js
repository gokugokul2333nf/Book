import Book from "../models/Book.js";

export const createBook = async (req, res) => {
  try {
    const book = new Book({ ...req.body, user: req.userId });
    const saved = await book.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.userId });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const updated = await Book.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    await Book.findOneAndDelete({ _id: req.params.id, user: req.userId });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const toggleFavorite = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, user: req.userId });
    book.favorite = !book.favorite;
    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const toggleWishlist = async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id, user: req.userId });
    book.wishlist = !book.wishlist;
    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
