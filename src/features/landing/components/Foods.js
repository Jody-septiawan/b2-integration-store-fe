import React from "react";
import { Filter } from "./Filter";
import { foods } from "@/dummy/food";
import { FoodCard } from "./FoodCard";

export const Foods = () => {
  return (
    <div className="container mx-auto py-6 flex flex-col gap-y-4">
      <Filter title="Menu's" />
      <div className="grid grid-cols-12 gap-4">
        {foods.map((food) => (
          <FoodCard
            data={food}
            key={`food-item-${food?.id}`}
            className="col-span-2"
          />
        ))}
      </div>
    </div>
  );
};
