import { Router } from "express";
import userRouter from "./user/userRotes.js";
import authRouter from "./auth/authRoutes.js";
import profileRouter from "./profile/profileRoutes.js";
const router = Router()

router.use("/users", userRouter)
router.use('/auth', authRouter)
router.use("/profile", profileRouter)

export default router