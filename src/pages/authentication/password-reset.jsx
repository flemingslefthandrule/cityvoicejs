import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../axios/authProvider";
import Card from "../../ui/card"
import Button from "../../ui/button"
import { Auth, AuthLeft, AuthRight } from "./auth"

const Passwordrest = () => {
  const { auth, setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <Auth>
      <AuthLeft className="flex items-center justify-center">
        Password reset link sent
      </AuthLeft>
      <AuthRight className="flex items-center justify-center">
        <Card title="Password reset link sent!" className="bg-gray-800 w-full flex flex-col gap-3">
          <Button onClick={()=>{navigate("/login")}}>Done</Button>
        </Card>
      </AuthRight>
    </Auth>
  )
}

export default Passwordrest