import Book from "../models/book.js";
export const getBooks = async () => {
    try {
        const books = await Book.find();
        return books;
    }
    catch (e) {
        console.log(e);
    }
};
export const getBookById = async (id) => {
    const book = await Book.findById(id);
    return book;
};
export const createBook = async (title, author) => {
    const newBook = new Book({ title: title, author: author });
    return await newBook.save();
};
export const deleteBook = async (id) => {
    try {
        const book = await Book.findOneAndDelete({ _id: id });
        if (!book) {
            throw new Error("Book not found");
        }
        return true;
    }
    catch (error) {
        throw new Error(error);
    }
};
export const editBook = async (id, title, author) => {
    try {
        const updateBook = await Book.findByIdAndUpdate({ _id: id }, { title, author }, { new: true });
        if (!updateBook)
            throw new Error("Book not found");
        return updateBook;
    }
    catch (error) {
        throw new Error("Error editing book: " + error.message);
    }
};
