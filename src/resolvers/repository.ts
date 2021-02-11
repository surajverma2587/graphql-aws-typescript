import fetch from "node-fetch";

import { RepositoryArgs } from "./interface";

export const repository = async (_: any, args: RepositoryArgs) => {
  const repositoryUrl = `https://api.github.com/repositories/${args.id}`;

  const response = await fetch(repositoryUrl, { method: "get" });
  const data = await response.json();

  const { owner: author, id, name, html_url: url } = data;
  return {
    id,
    name,
    url,
    author,
  };
};
