export const author = async (parent: any) => {
  const { author } = parent;
  return {
    id: author.id,
    username: author.login,
    homeUrl: author.url,
  };
};
