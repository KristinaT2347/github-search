const API_URL = "https://api.github.com";

export class GithubApi {
  getUser = async (nick) => {
    const response = await fetch(`${API_URL}/users/${nick}`);
    if (response.status !== 200) {
      throw new Error("not 200");
    }

    return await response.json();
  };

  getUserRepositories = async (nick) => {
    const response = await fetch(`${API_URL}/users/${nick}/repos`);
    if (response.status !== 200) {
      throw new Error("not 200");
    }

    return await response.json();
  };
}
