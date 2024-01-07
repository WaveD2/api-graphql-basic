const { gql } = require("apollo-server-express");

const typeDefs = gql`
  #Book
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  #Author
  type Author {
    id: ID!
    name: String
    dress: String
    age: Int

    books: [Book]
  }

  #Root type
  type Query {
    books: [Book]
    book(id: ID): Book

    authors: [Author]
    author(id: ID): Author
  }

  type Mutation {
    createAuthor(name: String, age: Int, dress: String): Author
    createBook(name: String, authorId: ID!, genre: String): Book
  }
`;

module.exports = typeDefs;
