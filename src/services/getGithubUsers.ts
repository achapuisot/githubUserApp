export const getGithubUsers = async () => {
  const response = await fetch('https://api.github.com/users');

  if (response) {
    const usersJson = await response.json();

    const users = usersJson.map((p: any) => p.login);
    return users;
  }
};

export const getSpecificUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response) {
    const userJson = await response.json();

    return userJson;
  }
};
