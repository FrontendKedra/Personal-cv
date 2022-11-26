export const getGithubRepositories = async () => {
  const response = await fetch("https://api.github.com/users/s5zee/repos");
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
