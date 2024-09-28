import React from "react";
import { useDeleteFood } from "../hooks/useDeleteFood";

export const ModalConfirmDeleteFood = ({ item, handleRefetch }) => {
  const { handleDelete } = useDeleteFood({ item, handleRefetch });

  return (
    <dialog id={`${item.id}-food-modal-delete`} className="modal">
      <div className="modal-box">
        <p>
          Are Your sure to delete{" "}
          <span className="badge badge-ghost mx-2">{item.title}</span> ?
        </p>
        <div className="flex justify-end gap-x-2 mt-8">
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => {
              document
                .getElementById(`${item.id}-food-modal-delete-close`)
                .click();
            }}
          >
            Cancel
          </button>
          <button className="btn btn-sm btn-primary" onClick={handleDelete}>
            Yes
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button id={`${item.id}-food-modal-delete-close`}>close</button>
      </form>
    </dialog>
  );
};
