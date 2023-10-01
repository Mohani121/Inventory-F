"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successful");
      router.push("http://localhost:3000/");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return <div>profile page </div>;
}
