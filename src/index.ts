import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolver/book.resolver.js";
import typeDefs from "./schema/book.schema.js";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongo db is connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log(`🚀  Server ready at: ${url}`);
