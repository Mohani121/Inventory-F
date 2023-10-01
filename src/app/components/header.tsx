"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import dhaan from "../../../public/assets/images/dhaan.png";
import { FaSignOutAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

export default function Header() {
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
    <div className=" flex items-center p-4 justify-between bg-white  h-16">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center ml-2">
          <input
            type="search"
            placeholder="Search Product"
            className="rounded-full w-72 text-xs  p-2 focus:outline-none border focus:right-1 focus:border-btn2 -ml-2 "
          />
          <button className="-ml-10 ">
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="mx-4 flex justify-center items-center">
          <Image
            src={dhaan}
            width={30}
            height={30}
            alt="user profile picture"
            className="rounded-full"
          />
          <span className="text-md text-btn2 ml-2 ">Mohani</span>
        </div>
        <div className="flex justify-center items-center">
          <FaSignOutAlt size={16} color="#FB8C00" />
          <button onClick={logout}>
            <span className="text-xs text-btn1 ml-2">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
