import {User} from "../../model/user/userModel.js"
import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        required:true
    }, 
    firstName:{
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    }, 
    bio:{
        type: String
    }
},{timestamps:true})

export const Profile =  mongoose.model('Profile', profileSchema)
