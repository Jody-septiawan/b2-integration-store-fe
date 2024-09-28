import { api } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

export const useGetFoodById = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-food-by-id", id],
    queryFn: async () => {
      const response = await api.get(`/foods/${id}`);

      return response.data;
    },
  });

  const food = React.useMemo(() => {
    if (!data) return undefined;

    return data;
  }, [data]);

  return { food, isLoading };
};
