"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const RegisterPage = () => {
  const router = useRouter();
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });

  // INPUT ONCHANGE EVENT
  const handleOnChange = (e: any) => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // CREATE USER
  const createUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("api/user", inputData);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-80 flex flex-col gap-10 bg-white px-6 py-14 rounded-lg">
        <h1 className="text-xl font-semibold text-center">
          Register your account
        </h1>
        {/* REGISTER FORM */}
        <form action="" className="flex flex-col gap-8">
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => handleOnChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => handleOnChange(e)}
          />
          <input
            type="password"
            name="passwordRepeat"
            placeholder="Password"
            required
            onChange={(e) => handleOnChange(e)}
          />

          <div className="flex items-center justify-between">
            {/* GO TO LOGING BUTTON */}
            <p className="text-sm text-gray-500 ml-4">
              Already register?{" "}
              <a className="underline hover:text-teal-500" href="/login">
                Sign in
              </a>
            </p>
            {/* REGISTER BUTTON */}
            <button
              className="w-fit py-1 px-3 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-all ease-linear duration-150"
              onClick={createUser}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
