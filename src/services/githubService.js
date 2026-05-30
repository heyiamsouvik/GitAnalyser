const axios = require("axios");

const githubClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
  }
});

const getUserProfile = async(username) => {

  const user = await githubClient.get(`/users/${username}`);

  const repos = await githubClient.get(
    `/users/${username}/repos?per_page=100`
  );

  return {
    user: user.data,
    repos: repos.data
  };
};

module.exports = {
  getUserProfile
};