import { repository } from "./repository";
import { repositories } from "./repositories";
import { author } from "./author";

export const resolvers = {
  Query: {
    repositories,
    repository,
  },
  Repository: {
    author,
  },
};
