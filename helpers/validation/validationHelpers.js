
export const validateSchema = (schema, data, res) => {
    // invoking JOI validation on schema with provided data 
    const { error } = schema.validate(data);
    if(error){
        // console.log(error);
        return res.status(400).json({
            status: "failure",
            message : error.details[0].message 
        })
        
    }
};