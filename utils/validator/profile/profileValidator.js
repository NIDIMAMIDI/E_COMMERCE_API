import Joi from "joi";
import { validateSchema } from "../../../helpers/validation/validationHelpers.js";

export const profileValidation = (req, res, next)=>{
    const schema = Joi.object({
        firstName : Joi.string().min(3).max(20).messages({
            'string.empty': 'First Name cannot be empty',
            'string.min': 'First Name should have at least {#limit} characters',
            'string.max': 'First Name should have at most {#limit} characters'
        }),
        lastName : Joi.string().min(3).max(20).messages({
            'string.empty': 'First Name cannot be empty',
            'string.min': 'First Name should have at least {#limit} characters',
            'string.max': 'First Name should have at most {#limit} characters'
        }),
        bio : Joi.string()
    })

    const error = validateSchema(schema, req.body);
    if(error){
        return res.status(400).json({
            status: "failure",
            message : error.details[0].message
        })
    }
    next();
}