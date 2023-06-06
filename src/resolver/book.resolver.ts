import {
  createBook,
  getBooks,
  deleteBook,
  getBookById,
  editBook,
} from "../repos/book.repo.js";

const resolvers = {
  Query: {
    books: getBooks,
    book: async (parent, { id }: { id: String }) => getBookById(id),
  },
  Mutation: {
    createBook: async (
      parent,
      { title, author }: { title: String; author: String }
    ) => createBook(title, author),
    deleteBook: async (parent, { id }: { id: String }) => deleteBook(id),
    editBook: async (
      parent,
      { id, author, title }: { id: String; title: String; author: String }
    ) => editBook(id, title, author),
  },
};

export default resolvers;
