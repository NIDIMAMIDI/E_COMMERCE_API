import { LoginHistory } from "../../model/loginHistory/loginHistoryModel.js"
export const getLoginHistoryById = async(req, res, next)=>{
    try{
        const {id} = req.params;
        const loginHistories = await LoginHistory.find({userId: id})
        if(!loginHistories) {
            return res.status(404).json({
                status:"failure",
                message:"No login History found with this user ID"
            })
        }
        res.status(200).json({
            status:"success",
            data :{
                loginHistories
            }
        })
    }catch(err){
        res.status(500).json({
            status: "failure",
            message: err.message
        })
    }
}