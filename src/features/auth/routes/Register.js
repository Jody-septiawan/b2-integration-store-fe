import React from "react";
import { Navbar } from "@/components/Navbar";
import { FormRegister } from "../components/FormRegister";

export const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <div className="border border-secondary px-4 py-8 max-w-md rounded-xl w-full">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};
