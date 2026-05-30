const db = require("../config/db");

const saveProfile = async(profile)=>{

  const query = `
  INSERT INTO github_profiles
  (
    github_id,
    username,
    name,
    bio,
    public_repos,
    followers,
    following,
    account_age_years,
    profile_score,
    top_language,
    most_starred_repo,
    total_stars,
    profile_url,
    avatar_url
  )
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  ON DUPLICATE KEY UPDATE
  public_repos=VALUES(public_repos),
  followers=VALUES(followers),
  following=VALUES(following),
  profile_score=VALUES(profile_score)
  `;

  await db.query(query, Object.values(profile));
};

const getAllProfiles = async()=>{

  const [rows] =
  await db.query(
    "SELECT * FROM github_profiles ORDER BY analyzed_at DESC"
  );

  return rows;
};

const getProfile = async(id)=>{

  const [rows] =
  await db.query(
    "SELECT * FROM github_profiles WHERE id=?",
    [id]
  );

  return rows[0];
};

module.exports = {
  saveProfile,
  getAllProfiles,
  getProfile
};