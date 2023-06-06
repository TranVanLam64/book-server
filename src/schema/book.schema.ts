const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(id: ID): Book
  }

  type Mutation {
    createBook(title: String, author: String): Book
    deleteBook(id: ID): Book
    editBook(id: ID, title: String, author: String): Book
  }
`;

export default typeDefs;
