const express = require("express");

const router = express.Router();

const controller =
require("../controllers/profileController");

// router.post(
//   "/analyze/:username",
//   controller.analyzeGithubProfile
// );
// 


router.get("/analyze", 
  controller.analyzeGithubProfile)

router.get(
  "/profiles",
  controller.getProfiles
);

router.get(
  "/profiles/:id",
  controller.getProfile
);

module.exports = router;