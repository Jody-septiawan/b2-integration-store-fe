import React from "react";
import { Navbar } from "@/components/Navbar";
import { FormLogin } from "../components/FormLogin";

export const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <div className="border border-secondary px-4 py-8 max-w-md rounded-xl w-full">
          <FormLogin />
        </div>
      </div>
    </div>
  );
};
