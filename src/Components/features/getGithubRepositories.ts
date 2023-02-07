import { RootObject } from "../../@types/repositoriesTypes";

export const getGithubRepositories = async () => {
  const response = await fetch(
    "https://api.github.com/users/frontendkedra/repos"
  );
  if (!response.ok) {
    new Error(response.statusText);
  }

  return (await response.json()) as Promise<RootObject>;
};
