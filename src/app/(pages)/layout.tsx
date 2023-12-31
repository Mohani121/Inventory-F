// import "@/globals.css";
import type { Metadata } from "next";
import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen overflow-hiden ">
          <Sidebar />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-mainColor">
            <Header />

            <div className="flex justify-center items-center w-screen h-screen bg-mainColor ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
