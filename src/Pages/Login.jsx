import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout/HomeLayout";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Slices/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // for user input
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",

  });

  // function to set the signup data
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  
  

  // function to create account
  const onLogin= async (event) => {
    event.preventDefault();

    // checking the empty fields
    if (
      !loginData.email ||  !loginData.password ) {
      toast.error("Please fill all the fields");
      return;
    }
  
    const response = await dispatch(login(loginData));

    // redirect to login page if true
    if (response?.payload?.success) navigate("/login");

    // clearing the signup inputs
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <Layout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          onSubmit={onLogin}
          className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold">Login Page</h1>
          
          {/* input for email */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent px-2 py-1 border"
              value={loginData.email}
              onChange={handleUserInput}
            />
          </div>

          {/* input for password */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="bg-transparent px-2 py-1 border"
              value={loginData.password}
              onChange={handleUserInput}
            />
          </div>

          {/* registration button */}
          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
           Login
          </button>

          <p className="text-center">
            Don't have an account ? {" "} <Link to={"/signup"} className="link text-accent cursor-pointer">
             SignUp
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;