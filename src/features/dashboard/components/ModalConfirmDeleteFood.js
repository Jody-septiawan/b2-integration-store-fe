import React from "react";

export const ModalConfirmDeleteFood = ({ item }) => {
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
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              document
                .getElementById(`${item.id}-food-modal-delete-close`)
                .click();
            }}
          >
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
