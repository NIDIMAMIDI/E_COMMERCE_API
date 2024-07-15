import {Profile} from '../../model/profile/profileModel.js';

export const createProfile = async (req, res, next) => {
    try {
        const { userId } = req.params; // Extract userId from req.params
        let { firstName, lastName, bio } = req.body; // Extract profile data from req.body

        
        // Create a new profile using the Profile model
        const profile = await Profile.create({
            user: userId, // Assign userId to the 'user' field in the Profile model
            firstName:firstName,
            lastName:lastName,
            bio
        });

        // Respond with success message and created profile data
        res.status(201).json({
            status: 'success',
            profileCreatedData: {
                profile
            }
        });
    } catch (err) {
        // Handle any errors that occur during profile creation
        res.status(500).json({
            status: 'failure',
            message: err.message
        });
    }
};


export const editProfille = async(req, res, next)=>{
    try{
        const {profileId} = req.params  // Extract profileId from req.params
        const {firstName, lastName, bio} = req.body     // Extract updated profile data from req.body
       // Update the profile with the provided profileId
        const updatedProfile = await Profile.findOneAndUpdate(
            { _id: profileId },
            { firstName: firstName, lastName: lastName, bio: bio },
            { new: true, runValidators: true }
          );

          // If no profile is found, respond with a 404 status and failure message
        if(!updatedProfile){
            return res.status(404).json({
                status : "failure",
                message: "User profile is not found"
            })
        }
        // Respond with success message and updated profile data
        res.status(200).json({
            status:"success",
            updatedProfileData : {
                updatedProfile
            }
        })
    }catch(err){
        // Handle any errors that occur during profile update
        res.status(500).json({
            status:"failure",
            message:err.message
        })
    }
}

export const getProfile = async(req, res, next)=>{
    try{
        const {profileId} = req.params      // Extract profileId from req.params

        // Find the profile with the provided profileId
        const profile = await Profile.findOne({_id:profileId})

        //// If no profile is found, respond with a 404 status and failure message
        if(!profile){
            return res.status(404).json({
                status:"failure",
                message : "Profile not Found"
            })
        }
        // Respond with success message and profile data
        res.status(200).json({
            status:"success",
            data :{
                profile
            }
        })
    }catch(err){
        res.status(500).json({
            status:"failure",
            message : err.message
        })
    }
}