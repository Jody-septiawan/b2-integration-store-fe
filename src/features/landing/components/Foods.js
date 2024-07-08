import React from "react";
import { Filter } from "./Filter";
import { foods } from "@/dummy/food";
import { FoodCard } from "./FoodCard";
import { useFoodFilter } from "../hooks/useFoodFilter";

export const Foods = () => {
  const { foodFiltereds, handleOnChange, value } = useFoodFilter({ foods });
  return (
    <div className="container mx-auto py-6 flex flex-col gap-y-4">
      <Filter title="Menu's" onChange={handleOnChange} value={value} />
      <div className="grid grid-cols-12 gap-4">
        {foodFiltereds.map((food) => (
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
