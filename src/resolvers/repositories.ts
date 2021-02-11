import fetch from "node-fetch";

import { RepositoriesArgs } from "./interface";

export const repositories = async (_: any, args: RepositoriesArgs) => {
  const repositoriesUrl = `https://api.github.com/users/${args.username}/repos?per_page=10`;

  const response = await fetch(repositoriesUrl, { method: "get" });
  const data = await response.json();

  return data.map((each: any) => {
    const { owner: author, id, name, html_url: url } = each;
    return {
      id,
      name,
      url,
      author,
    };
  });
};
