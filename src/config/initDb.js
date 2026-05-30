const pool = require("./db");

async function initializeDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS github_profiles (
      id INT PRIMARY KEY AUTO_INCREMENT,
      github_id BIGINT UNIQUE,
      username VARCHAR(100) NOT NULL,
      name VARCHAR(255),
      bio TEXT,
      public_repos INT,
      followers INT,
      following INT,
      account_age_years INT,
      profile_score INT,
      top_language VARCHAR(100),
      most_starred_repo VARCHAR(255),
      total_stars INT,
      profile_url VARCHAR(255),
      avatar_url VARCHAR(255),
      analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

module.exports = initializeDatabase;