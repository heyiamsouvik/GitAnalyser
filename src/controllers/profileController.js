const githubService = require("../services/githubService");
const analyzeProfile = require("../services/analysisService");

const profileModel = require("../models/profileModel");


// exports.analyzeGithubProfile = async(req,res,next)=>{

//   try{

//     const { username } = req.params;

//     const { user, repos } =
//       await githubService.getUserProfile(username);

//     const analysis =
//       analyzeProfile(user,repos);

//     await profileModel.saveProfile(analysis);

//     res.status(200).json({
//       success:true,
//       data:analysis
//     });

//   }catch(error){
//     next(error);
//   }
// };


exports.analyzeGithubProfile = async (req, res, next) => {
  try {
    const { username } = req.query;

    if (!username) {
      return res.status(400).json({
        success: false,
        message: "Username is required"
      });
    }

    const { user, repos } =
      await githubService.getUserProfile(username);

    const analysis = analyzeProfile(user, repos);

    await profileModel.saveProfile(analysis);

    res.status(200).json({
      success: true,
      data: analysis
    });

  } catch (error) {
    next(error);
  }
};

exports.getProfiles = async(req,res,next)=>{

  try{

    const data =
    await profileModel.getAllProfiles();

    res.json(data);

  }catch(error){
    next(error);
  }
};

exports.getProfile = async(req,res,next)=>{

  try{

    const data =
    await profileModel.getProfile(
      req.params.id
    );

    res.json(data);

  }catch(error){
    next(error);
  }
};