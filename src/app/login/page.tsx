"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";
import Image from "next/image";
import invtImg from "../../../public/assets/images/iventory2.png";
import logo from "../../../public/assets/images/dhaan.png";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      toast.success("Login Success");
      router.push("/profile");
    } catch (error: any) {
      return NextResponse.json({ error: "Login Failed" }, { status: 400 });
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center w-2/5  justify-center bg-darkClr">
        <h1 className="text-4xl  text-btn1">{loading ? "Loading" : "Login"}</h1>
        <hr />

        <label htmlFor="email" className="text-mainColor mt-8">
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
          onClick={onLogin}
          className="p-2 mt-4 rounded-full w-48 text-mainColor bg-btn2"
        >
          Login
        </button>
        <p className="mt-2 italic text-sm text-mainColor">
          Not Registered{" "}
          <Link href="/signup" className="text-btn1">
            Register Here
          </Link>
        </p>
      </div>

      <div className="flex flex-col justify-between items-center">
        <Image src={logo} width={150} alt="logo" />

        <h1 className="text-8xl font-extrabold text-center leading-24">
          <span className="text-btn3">Inventory</span> Managment System
        </h1>
        <Image src={invtImg} alt="Inventory Image " />
      </div>
    </div>
  );
}
