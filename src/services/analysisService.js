const analyzeProfile = (user, repos) => {

  let totalStars = 0;

  let languageCount = {};

  let mostStarredRepo = "";

  let maxStars = 0;

  repos.forEach(repo => {

    totalStars += repo.stargazers_count;

    if(repo.language){
      languageCount[repo.language] =
      (languageCount[repo.language] || 0) + 1;
    }

    if(repo.stargazers_count > maxStars){
      maxStars = repo.stargazers_count;
      mostStarredRepo = repo.name;
    }
  });

  const topLanguage =
    Object.keys(languageCount)
      .sort((a,b)=>languageCount[b]-languageCount[a])[0] || "N/A";

  const accountAgeYears =
    new Date().getFullYear() -
    new Date(user.created_at).getFullYear();

  const profileScore =
      (user.followers * 2) +
      user.public_repos +
      totalStars;

  return {
    github_id: user.id,
    username: user.login,
    name: user.name,
    bio: user.bio,
    public_repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    account_age_years: accountAgeYears,
    profile_score: profileScore,
    top_language: topLanguage,
    most_starred_repo: mostStarredRepo,
    total_stars: totalStars,
    profile_url: user.html_url,
    avatar_url: user.avatar_url
  };
};

module.exports = analyzeProfile;