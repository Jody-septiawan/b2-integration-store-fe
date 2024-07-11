import { foods } from "@/dummy/food";
import { formatRupiah } from "@/helpers/formatRupiah";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaRegImage } from "react-icons/fa";

export const Food = () => {
  const router = useRouter();
  const { id } = router.query;

  const food = React.useMemo(() => {
    if (!id) return null;

    return foods.find((item) => item.id === parseInt(id));
  }, [id]);

  console.log(food);

  if (!food) return <></>;

  return (
    <div className="grid grid-cols-12 gap-x-4">
      <div className="h-56 bg-base-300/10 flex justify-center items-center text-base-100 col-span-5 rounded-xl overflow-hidden">
        {!food.image && <FaRegImage className="text-6xl" />}
        {food.image && (
          <Image
            src={food.image}
            alt={food.title}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="col-span-7 flex flex-col gap-y-4">
        <p className="text-2xl">{food.title}</p>
        <p className="text-sm font-semibold">{formatRupiah(food.price)}</p>
      </div>
    </div>
  );
};
