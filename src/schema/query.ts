export const Query = `
  type Query {
    repositories(username: String!): [Repository]
    repository(id: String!): Repository
  }
`;
