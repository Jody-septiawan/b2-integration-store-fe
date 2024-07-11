import { Navbar } from "@/components/Navbar";
import React from "react";
import { Food } from "../components/detail/Food";
import { ListFood } from "../components/ListFood";

export const FoodDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 container mx-auto gap-x-6 py-10">
        <div className="col-span-9">
          <Food />
        </div>
        <div className="col-span-3">
          <ListFood />
        </div>
      </div>
    </div>
  );
};
