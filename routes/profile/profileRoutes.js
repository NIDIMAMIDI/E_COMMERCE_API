import { Router } from "express";
import { createProfile, editProfille, getProfile} from "../../controllers/profile/profileControllers.js";
import { profileValidation } from "../../utils/validator/profile/profileValidator.js";

const profileRouter = Router()

profileRouter.post("/create-profile/:userId", profileValidation, createProfile)
profileRouter.post("/edit-profile/:profileId", profileValidation, editProfille) 
profileRouter.get("/get-profile/:profileId", getProfile)
export default profileRouter