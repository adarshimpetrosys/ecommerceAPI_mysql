const express            = require("express");
const userController = require("../controllers/userController");
const userRouter     = express.Router();

userRouter.post("/user", userController.register);
userRouter.post("/user-otp-verification", userController.otpVerification);
userRouter.post("/user-mobotp-verification", userController.mobotpverification);


module.exports = userRouter;
