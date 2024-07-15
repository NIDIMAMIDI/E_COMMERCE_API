import { User } from "../../model/user/userModel.js";
export const getUsers = async(req, res, next)=>{
    try {
        const users = await User.find();
        res.status(200).json({
            status:"success",
            count: users.length,
            data:{
                users
            }
        })
    }
    catch(err){
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}

