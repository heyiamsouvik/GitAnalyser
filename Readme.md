# GitHub Profile Analyzer API

A backend service built with Node.js, Express.js, MySQL, and the GitHub REST API that analyzes public GitHub profiles, generates useful insights, and stores the analysis results in a MySQL database.

## Features

* Fetch GitHub user profile data using username
* Analyze GitHub profile statistics
* Store analysis results in MySQL
* Retrieve all analyzed profiles
* Retrieve a specific analyzed profile
* Automatically create database tables on application startup
* GitHub API integration with Personal Access Token support

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub REST API
* Axios
* mysql2

---

## Project Structure

```text
GitAnalyser/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── initDb.js
│   │
│   ├── controllers/
│   │   └── profileController.js
│   │
│   ├── models/
│   │   └── profileModel.js
│   │
│   ├── routes/
│   │   └── profileRoutes.js
│   │
│   ├── services/
│   │   ├── githubService.js
│   │   └── analysisService.js
│   │
│   └── app.js
│
├── database/
│   └── schema.sql
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## Database Schema

### github_profiles

| Column            | Type         |
| ----------------- | ------------ |
| id                | INT          |
| github_id         | BIGINT       |
| username          | VARCHAR(100) |
| name              | VARCHAR(255) |
| bio               | TEXT         |
| public_repos      | INT          |
| followers         | INT          |
| following         | INT          |
| account_age_years | INT          |
| profile_score     | INT          |
| top_language      | VARCHAR(100) |
| most_starred_repo | VARCHAR(255) |
| total_stars       | INT          |
| profile_url       | VARCHAR(255) |
| avatar_url        | VARCHAR(255) |
| analyzed_at       | TIMESTAMP    |

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/heyiamsouvik/GitAnalyser.git
cd GitAnalyser
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

DB_HOST=your_database_host
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password

GITHUB_TOKEN=your_github_personal_access_token
```

### 4. Run the Application

```bash
npm run dev
```

or

```bash
npm start
```

Server will start on:

```text
http://localhost:5000
```

---

## API Endpoints

### Analyze GitHub Profile

Fetches profile information from GitHub, generates insights, and stores the result in MySQL.

**Request**

```http
GET /api/analyze?username=heyiamsouvik
```

**Response**

```json
{
  "success": true,
  "data": {
    "github_id": 155041162,
    "username": "heyiamsouvik",
    "name": "Souvik Majhi",
    "bio": null,
    "public_repos": 21,
    "followers": 0,
    "following": 0,
    "account_age_years": 3,
    "profile_score": 24,
    "top_language": "JavaScript",
    "most_starred_repo": "Fake_News_Prediction_System_for_Student",
    "total_stars": 3,
    "profile_url": "https://github.com/heyiamsouvik",
    "avatar_url": "https://avatars.githubusercontent.com/u/155041162?v=4"
  }
}
```

---

### Get All Analyzed Profiles

**Request**

```http
GET /api/profiles
```

**Response**

```json
[
  {
    "id": 1,
    "github_id": 155041162,
    "username": "heyiamsouvik",
    "name": "Souvik Majhi",
    "bio": null,
    "public_repos": 21,
    "followers": 0,
    "following": 0,
    "account_age_years": 3,
    "profile_score": 24,
    "top_language": "JavaScript",
    "most_starred_repo": "Fake_News_Prediction_System_for_Student",
    "total_stars": 3,
    "profile_url": "https://github.com/heyiamsouvik",
    "avatar_url": "https://avatars.githubusercontent.com/u/155041162?v=4",
    "analyzed_at": "2026-05-29T18:14:28.000Z"
  }
]
```

---

### Get Single Profile

**Request**

```http
GET /api/profiles/1
```

**Response**

```json
{
  "id": 1,
  "github_id": 155041162,
  "username": "heyiamsouvik",
  "name": "Souvik Majhi",
  "bio": null,
  "public_repos": 21,
  "followers": 0,
  "following": 0,
  "account_age_years": 3,
  "profile_score": 24,
  "top_language": "JavaScript",
  "most_starred_repo": "Fake_News_Prediction_System_for_Student",
  "total_stars": 3,
  "profile_url": "https://github.com/heyiamsouvik",
  "avatar_url": "https://avatars.githubusercontent.com/u/155041162?v=4",
  "analyzed_at": "2026-05-29T18:14:28.000Z"
}
```

---

## Analysis Metrics

The application currently stores:

* Public Repository Count
* Followers Count
* Following Count
* Account Age
* Total Repository Stars
* Most Starred Repository
* Top Programming Language
* Profile Score
* GitHub Profile URL
* Avatar URL

### Profile Score Formula

```text
Profile Score =
(Followers × 2) +
Public Repositories +
Total Stars
```

---

## Deployment

The API can be deployed on:

* Render
* Railway
* Koyeb

The database can be hosted on:

* FreeSQLDatabase
* Railway MySQL
* Aiven
* PlanetScale

---

## Sample Test URLs

Analyze Profile:

```http
http://localhost:5000/api/analyze?username=heyaimsouvik
```

Get All Profiles:

```http
http://localhost:5000/api/profiles
```

Get Profile By ID:

```http
http://localhost:5000/api/profiles/1
```

---


