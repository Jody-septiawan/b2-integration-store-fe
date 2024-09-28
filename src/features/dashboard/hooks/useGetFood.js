import { api } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export const useGetFood = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["get-all-food-on-dashboard"],
    queryFn: async () => {
      const response = await api.get("/foods");

      return response.data;
    },
  });

  const foods = React.useMemo(() => {
    if (!data) return [];

    return data;
  }, [data]);

  const handleRefetch = React.useCallback(() => {
    refetch();
  }, []);

  return { foods, handleRefetch, isLoading };
};
