import React from "react";

export const ModalAddFood = () => {
  return (
    <dialog id={`modal-dashboard-add-food`} className="modal">
      <div className="modal-box">
        <div className="">
          <h2 className="text-center text-xl font-bold">Add Food</h2>
          <div className="mt-8 flex flex-col gap-y-4">
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
            />
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex justify-end gap-x-2 mt-8">
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => {
              document.getElementById(`modal-dashboard-add-food-close`).click();
            }}
          >
            Cancel
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              document.getElementById(`modal-dashboard-add-food-close`).click();
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button id={`modal-dashboard-add-food-close`}>close</button>
      </form>
    </dialog>
  );
};
