"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-darkClr">
      <h1 className="text-8xl font-bold text-mainColor">
        {loading ? "Loading" : "Signup Page"}
      </h1>
      <hr />
      <label htmlFor="username" className="mt-10 text-mainColor">
        User Name
      </label>
      <input
        className="p-2 border border-gray-400 rounded-full mb-4 mt-2 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        placeholder="Enter Your User Name"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <label htmlFor="email" className="text-mainColor">
        Email
      </label>
      <input
        className="p-2 border border-gray-400 rounded-full mb-4 mt-2 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        placeholder="Enter Your Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <label htmlFor="password" className="text-mainColor">
        Password
      </label>
      <input
        className="p-2 border border-gray-400 rounded-full mb-4 mt-2 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        placeholder="Enter Your Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button
        onClick={onSignup}
        className="p-2 mt-4 rounded-full w-48 text-mainColor bg-btn2"
      >
        Signup Here
      </button>
      <p className="mt-2 italic text-sm text-mainColor">
        Already Registered,{" "}
        <Link href="/login" className="text-btn1">
          Login Here
        </Link>
      </p>
    </div>
  );
}
