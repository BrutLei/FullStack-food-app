import React, { useState } from "react";
import { LoginBg, Wok } from "../assets";
import LoginInput from "../assets/components/LoginInput";
import { FaEnvelope, FaLock, FcGoogle } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* {background Image} */}
      <img
        src={LoginBg}
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        alt="Login background"
      />
      {/* login box */}
      <div className="flex flex-col h-full items-center bg-lightOverlay w-full md:w-[40%] backdrop-blur-sm p-4 px-4 py-4 gap-6">
        {/* Logo section*/}
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Wok} className="w-14" alt="logo website" />
          <p className="text-headingColor font-semibold text-2xl">Woker</p>
        </div>

        {/* Form section*/}
        <p className="text-3xl font-semibold text-headingColor">Welcome</p>
        <p className="text-xl text-textColor -mt-6">
          {isSignup ? "Sign-up" : "Sign-in"} with following
        </p>
        {/* input */}
        <div className="w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          {/* Email */}
          <LoginInput
            placeHolder="Email Here"
            icon={<FaEnvelope className="text-xl text-textColor" />}
            isSignUp={isSignup}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
          />
          {/* Password */}
          <LoginInput
            placeHolder="Password"
            icon={<FaLock />}
            isSignUp={isSignup}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
          />

          {/* Password confirm */}
          {isSignup && (
            <LoginInput
              placeHolder="Password Confirmation"
              icon={<FaLock />}
              isSignUp={isSignup}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
            />
          )}

          {isSignup ? (
            <p>
              You already have an account?
              <motion.button
                {...buttonClick}
                className="text-red-500 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignup(false)}
              >
                Sign-in here
              </motion.button>
            </p>
          ) : (
            <p>
              Don't have an account?
              <motion.button
                {...buttonClick}
                className="text-red-500 underline cursor-pointer bg-transparent"
                onClick={() => setIsSignup(true)}
              >
                Create one
              </motion.button>
            </p>
          )}

          {/* Button section */}
          <motion.button
            {...buttonClick}
            className="w-full px-4 py-2 rounded-md bg-red-500 cursor-pointer text-white text-xl capitalize hover:bg-red-600 transition-all duration-150"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </motion.button>
        </div>
        {/* separate line */}
        <div className="flex items-center justify-between gap-16">
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
          <p className="text-white">or</p>
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
        </div>

        {/* Google authentication button */}
        <motion.button className="flex items-center justify-center px-20 py-2 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4">
          <FcGoogle className="text-3xl" />
          <p className=" capitalize text-base text-headingColor">
            Sign In with Google
          </p>
        </motion.button>
      </div>
    </div>
  );
};

export default Login;
