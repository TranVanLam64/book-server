import { createBook, getBooks, deleteBook, getBookById, editBook, } from "../repos/book.repo.js";
const resolvers = {
    Query: {
        books: getBooks,
        book: async (parent, { id }) => getBookById(id),
    },
    Mutation: {
        createBook: async (parent, { title, author }) => createBook(title, author),
        deleteBook: async (parent, { id }) => deleteBook(id),
        editBook: async (parent, { id, author, title }) => editBook(id, title, author),
    },
};
export default resolvers;
