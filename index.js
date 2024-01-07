const express = require("express");
const mongoose = require("mongoose");
const mongoDataMethods = require("./data/db");
// connect Mongoose Atlas
const url =
  "mongodb+srv://waved:06042002@basicgraphql.pwax8ab.mongodb.net/GraphQL?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connect success");
  } catch (error) {
    console.log("dist connect", error);
  }
};

connectDB();

// create server database GraphQL

const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const app = express();

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => mongoDataMethods,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

app.get("/rest", function (req, res) {
  res.json({ data: "api working" });
});

app.listen(4000, function () {
  console.log(`server running on port 4000`);
  console.log(`http://localhost:4000${apolloServer.graphqlPath}`);
});
