import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState("");

  useEffect(() => {
    setRefresh(localStorage.getItem("refresh_token"));
    if (refresh) {
      navigate("/");
    }
  }, [refresh]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const mobileNum = e.target[1].value;
    const isExpert = e.target[2].value;
    const password = e.target[3].value;
    const userData = {
      username: userName,
      phone: mobileNum,
      is_expert: isExpert,
      password: password,
    };
    console.log(userData);
    await axios
      .post(apiurl + "/user/register/", userData)
      .then(function (response) {
        console.log(response);
        localStorage.clear();
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        localStorage.setItem("username", response.data.username);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-900 w-screen h-screen">
      <div className=" flex justify-center text-slate-100 p-[70px]">
        <div className="p-8 min-w-[450px] rounded border-white shadow-lg bg-[#F9DBBD] bg-opacity-10">
          <div className="text-xl py-2 mb-1 font-bold">Lets Get Started</div>
          <form onsubmit="{handleSubmit}">
            <div className="py-2">
              <input
                className=" focus:outline outline-white w-full bg-transparent border border-slate-300 rounded-md placeholder-gray-500 p-2"
                type="text"
                name="userName"
                placeholder=" enter your username"
                required
              />
            </div>
            {/* <!-- <div className="w-full py-2">
              <div className="w-[49%] inline-block">
                <input
                  className="w-full bg-transparent border border-slate-300 rounded-md placeholder-gray-500 p-4"
                  type="text"
                  placeholder="Country"
                  required
                />
              </div>
              <div className="w-[50%] inline-block">
                <input
                  className="w-full bg-transparent border border-slate-300 rounded-md p-4 placeholder-gray-500"
                  type="text"
                  placeholder="State"
                  required
                />
              </div>
            </div> --> */}
            <div className=" w-full">
              <input
                className="focus:outline outline-white w-full bg-transparent border border-slate-300 rounded-md p-2 placeholder-gray-500"
                type="text"
                placeholder="enter your mobile number"
                required
                name="mobileNum"
              />
              {/* <!-- <div className="py-2 w-full">
                <input
                  className="w-full bg-transparent border border-slate-300 rounded-md p-4 placeholder-gray-500"
                  type="email"
                  placeholder="enter your email"
                  required
                />
              </div> --> */}
              <div className="py-2 w-full">
                <input
                  className="focus:outline outline-white w-full bg-transparent border border-slate-300 rounded-md p-2 placeholder-gray-500"
                  type="password"
                  name="password"
                  placeholder="Set password"
                  required
                />
              </div>
            </div>
            <div className="flex py-2">
              <input
                className="m-2"
                type="checkbox"
                name="isExpert"
                id="isExpert"
                required
              />
              <div className="flex inline-block">
                <label className="flex" htmlFor="isExpert">
                  Are you a Government Official
                </label>
              </div>
            </div>
            <input className="m-2" type="checkbox" required />
            <div className="inline-block">
              i agree to the
              <a className="text-amber-300 ml-1 " href="#">
                terms and conditions
              </a>
            </div>
            <div className="py-4 flex justify-center w-full">
              <button className=" border border-gray-300 w-[99%] bg-sky-950 text-white border border-grey-300 rounded p-2 hover:bg-cyan-700 hover:border-cyan-700 hover:text-white">
                Create account
              </button>
            </div>
          </form>
          <span className="ml-2">
            {" "}
            already have an account ?{" "}
            <Link
              className="font-medium text-amber-300 no-underline hover:text-[#535bf2]"
              to="/login"
            >
              Log In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
