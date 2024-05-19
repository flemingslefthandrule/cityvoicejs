import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../axios/authProvider";
import Card from "../../ui/card";
import Button from "../../ui/button";
import { Auth,AuthLeft,AuthRight } from "./auth"

const Forgotpassword = () => {
  const { auth, setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <Auth>
    <AuthLeft className="flex items-center justify-center">
      Forgot password form
    </AuthLeft>
    <AuthRight className="flex items-center justify-center">
        <Card className="bg-gray-800 w-full flex flex-col gap-3">
          <p className="text-lg font-bold">Enter the details of your account</p>
          <div className="flex flex-col gap-2">
            <p>Username</p>
            <input type="text" placeholder="username" name="userName" className="w-full rounded-lg bg-gray-700 py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring" />
            <div className="p-2 pb-0 flex items-center gap-2 text-gray-500">
                <div className="h-0 grow border-t-[1px] border-gray-500"></div>
                <p>or</p>
                <div className="h-0 grow border-t-[1px] border-gray-500"></div>
            </div>
            <p>Email</p>
            <input type="email" placeholder="email" name="email" className="w-full rounded-lg bg-gray-700 py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring" />
          </div>
          <Button onClick={()=>{navigate("/password-reset")}}>Get reset link</Button>
        </Card>
      </AuthRight>
    </Auth>
  );
};

export default Forgotpassword