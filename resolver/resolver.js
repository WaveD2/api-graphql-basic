// const { books } = require("../data/books.json");
// const { authors } = require("../data/authors.json");
const Author = require("../model/Author");
const Book = require("../model/Book");

const resolvers = {
  //Query database
  Query: {
    books: async (parent, args, context) => await context.getAllBooks(),

    book: async (parent, args, context) => await context.getBookById(args.id),

    //authors
    authors: async (parent, args, context) => await context.getAllAuthors(),
    author: async (parent, args, context) =>
      await context.getAuthorById(args.id),
  },

  Book: {
    author: async (parent, args, context) =>
      await context.getAuthorById(parent.authorId),
  },
  Author: {
    books: async (parent, args, context) =>
      await context.getAllBooks({ authorId: parent.id }),
  },

  //Create database
  Mutation: {
    createAuthor: async (parent, args, context) =>
      await context.createAuthor(args),
    createBook: async (parent, args, context) => await context.createBook(args),
  },
};

module.exports = resolvers;
