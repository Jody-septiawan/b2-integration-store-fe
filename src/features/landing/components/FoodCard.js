import { formatRupiah } from "@/helpers/formatRupiah";
import Image from "next/image";
import React from "react";
import { FaRegImage } from "react-icons/fa6";

export const FoodCard = ({ data, className }) => {
  return (
    <div
      className={`${className} card rounded-lg bg-base-100 card-shadow flex flex-col overflow-hidden`}
    >
      <div className="h-56 bg-base-300 flex justify-center items-center text-base-100">
        {/* <FaRegImage className="text-6xl" /> */}
        <Image
          src={data.image}
          alt={data.title}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2">
        <p className="text-xs">{data.title}</p>
        <p className="text-sm font-semibold">
          {formatRupiah(data.price * 15000)}
        </p>
      </div>
    </div>
  );
};
