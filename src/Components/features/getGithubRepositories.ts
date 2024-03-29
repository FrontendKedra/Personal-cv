import { ApiResponse } from "../../@types/ApiRepositoriesTypes";

export const getGithubRepositories = async () => {
  const response = await fetch(
    "https://api.github.com/users/frontendkedra/repos"
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Promise<ApiResponse>;
};
