// @ts-nocheck
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input } from "./index";

import { useDispatch } from "react-redux";

import authService from "../appwrite/auth";

import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.massage);
    }
  };

  return (
    <>
      <div className="flex items-center w-full">
        <div
          className={` mx-auto w-full bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
          <h2>sign in to your account</h2>
          <p className="mt-2 text-center text-base text-black">
            Don&apos; have any account? &nbsp;
            <Link to="/singup" className="font-medium text-primary">
              Sign Up
            </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-5">
              <Input
                label="Email:"
                placeholder="enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPateren: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label="password: "
                type="password"
                placeholder="enter your password"
                {...register("password", {
                  required: true,
                })}
              />
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
