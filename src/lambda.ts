import { ApolloServer, makeExecutableSchema } from "apollo-server-lambda";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({ schema });

export const handler = server.createHandler({
  cors: {
    origin: true,
    credentials: false,
  },
});
