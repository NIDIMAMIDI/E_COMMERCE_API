
import bcrypt from "bcrypt";

export const hashPassword = async (password, saltRounds) => {
    return await bcrypt.hash(password, saltRounds);
}

export const passwordChecking = async (plainTextPassword, hashedPassword) => {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
}

