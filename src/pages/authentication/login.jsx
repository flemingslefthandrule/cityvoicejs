import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios/axios";
import { AuthContext } from "../../axios/authProvider";
import Card from "../../ui/card";
import Button from "../../ui/button";

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("")
  const [password,setPassword] = useState("")

  useEffect(() => {
    if (auth && auth.refreshToken !== null && auth.refreshToken !== undefined) {
      navigate("/");
    }
  }, [auth]);

  const handleSubmit = async (e) => {
    const userData = {
      username: username,
      password: password,
    };
    await axios
      .post("/user/login/", userData)
      .then(function (response) {
        console.log(response);
        setAuth({
          refreshToken: response.data.refresh,
          accessToken: response.data.access,
          username: response.data.username,
        });
        console.log(auth);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <div className="flex justify-center items-center text-slate-100 w-screen h-screen">
        <Card title="Login" className="bg-gray-800 w-full flex flex-col gap-2">
          <p>Username</p>
          <input type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} className="w-full rounded-lg bg-gray-700 py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring" />
          <p>Password</p>
          <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-lg bg-gray-700 py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring" />
          <div className="flex gap-2 px-1">
            <input type="checkbox" /> 
            <p className="text-gray-200">stay logged in</p>
            <div className="grow"></div>
            <Link className="text-white underline" to="/forgot-password">Forgot password?</Link>
          </div>
          <Button onClick={handleSubmit}>Log in</Button>
          <div className="p-2 flex items-center gap-2 text-gray-500">
              <div className="h-0 grow border-t-[1px] border-gray-500"></div>
              <p>or</p>
              <div className="h-0 grow border-t-[1px] border-gray-500"></div>
          </div>
          <Button variant="secondary" onClick={()=>{navigate("/signup")}}>sign up</Button>
        </Card>
      </div>
    </div>
  );
};

export default Login;