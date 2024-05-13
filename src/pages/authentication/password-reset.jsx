import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../axios/authProvider";
import Card from "../../ui/card";
import Button from "../../ui/button";

const Passwordrest = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <div className="flex justify-center items-center text-slate-100 w-screen h-screen">
        <Card title="Password reset link sent!" className="bg-gray-800 w-full flex flex-col gap-3">
          <Button onClick={()=>{navigate("/login")}}>Done</Button>
        </Card>
      </div>
    </div>
  );
};

export default Passwordrest