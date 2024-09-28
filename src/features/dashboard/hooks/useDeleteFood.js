import { api } from "@/libs/api";
import React from "react";

export const useDeleteFood = ({ item, handleRefetch }) => {
  const handleDelete = React.useCallback(async () => {
    try {
      await api.delete(`/foods/${item.id}`);

      handleRefetch();

      document.getElementById(`${item.id}-food-modal-delete-close`).click();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { handleDelete };
};
