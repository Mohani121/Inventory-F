"use client";
import Image from "next/image";
import dhaan from "../../../public/assets/images/dhaan.png";
import Link from "next/link";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBoxes } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { HiTruck } from "react-icons/hi";
import { TbChecklist } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Sidebar() {
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
    <aside className="bg-darkClr sticky z-9999 h-screen w-24 overflow-y-hidden flex flex-col justify-between">
      <div className="mb-20">
        <Image src={dhaan} alt="Invntory Logo" />
      </div>

      <div className="flex flex-col justify-center items-center mb-auto">
        <div className="flex flex-col justify-center items-center mb-6 ">
          <BiSolidDashboard size={16} color="#FB8C00" />
          <Link href="/profile" className="text-mainColor text-xs mt-1">
            Dashboard
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center mb-6">
          <FaBoxes size={16} color="#FB8C00" />
          <Link href="/products" className="text-mainColor text-xs mt-1">
            Products
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center mb-6">
          <ImLocation2 size={16} color="#FB8C00" />
          <Link href="/location" className="text-mainColor text-xs mt-1">
            Locations
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center mb-6">
          <HiTruck size={16} color="#FB8C00" />
          <Link href="/suppliers" className="text-mainColor text-xs mt-1">
            Suppliers
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center mb-6">
          <TbChecklist size={18} color="#FB8C00" />
          <Link href="/orders" className="text-mainColor text-xs mt-1">
            Orders
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-8">
        <Link
          href="/mysetting"
          className=" flex flex-col justify-center items-center text-mainColor text-xs"
        >
          <IoMdSettings size={16} color="#FB8C00" />
          <span className="mt-1">User Seting</span>
        </Link>
        <button
          onClick={logout}
          className=" text-mainColor text-xs p-2 rounded-md flex justify-center items-center"
        >
          <FaSignOutAlt size={16} color="#FB8C00" />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </aside>
  );
}
