import jwt from "jsonwebtoken";

const signToken = (id) => {
    // payload or user 
    const payload = { id };
    // jwt secrret key content
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    // expiry time of jwt key
    const expiresIn = process.env.JWT_EXPIRES_IN;
    
    return jwt.sign(payload, jwtSecretKey, {
        expiresIn: expiresIn
    });
};

export const createToken = (user) => {
    // creating the token
    const token = signToken(user._id);
    // when the cookie wants to expire
    const cookieOptions = {
        expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 60 * 60 * 1000),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    
    return { token, cookieOptions };
};
