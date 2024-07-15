import { Router } from "express";
import { authValidator } from "../../utils/validator/auth/authValidator.js";
import { signup, login} from "../../controllers/auth/authControllers.js";
import { getLoginHistoryById } from "../../controllers/loginHistory/loginHistoryControllers.js";
const authRouter = Router()


//authentication Routes
authRouter.post("/signup", authValidator, signup)
authRouter.post("/login", authValidator, login)

// Route to get login history by user ID
authRouter.get('/login-history/:id', getLoginHistoryById);

export default authRouter