"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex h-screen overflow-hiden ">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-mainColor">
        <Header />

        <div className="flex justify-center items-center w-screen h-screen bg-mainColor ">
          Profile Page
        </div>
      </div>
    </div>
  );
}
