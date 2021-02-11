import { ApolloServer, makeExecutableSchema } from "apollo-server";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({ schema });

server
  .listen()
  .then(({ url }: { url: string }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((error) => {
    console.log(`🚀  Error ${error.message}`);
  });
