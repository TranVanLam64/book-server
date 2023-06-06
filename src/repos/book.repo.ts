import Book from "../models/book.js";

export const getBooks = async () => {
  try {
    const books = await Book.find();
    return books;
  } catch (e) {
    console.log(e);
  }
};

export const getBookById = async (id: String) => {
  const book = await Book.findById(id);
  return book;
};

export const createBook = async (title: String, author: String) => {
  const newBook = new Book({ title: title, author: author });
  return await newBook.save();
};

export const deleteBook = async (id: String) => {
  try {
    const book = await Book.findOneAndDelete({ _id: id });

    if (!book) {
      throw new Error("Book not found");
    }

    return true;
  } catch (error) {
    throw new Error(error);
  }
};
export const editBook = async (id: String, title: String, author: String) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(
      { _id: id },
      { title, author },
      { new: true }
    );
    if (!updateBook) throw new Error("Book not found");

    return updateBook;
  } catch (error) {
    throw new Error("Error editing book: " + error.message);
  }
};
