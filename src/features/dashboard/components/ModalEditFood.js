import Image from "next/image";
import React from "react";

export const ModalEditFood = ({ item }) => {
  return (
    <dialog id={`${item.id}-modal-dashboard-edit-food`} className="modal">
      <div className="modal-box">
        <div className="">
          <h2 className="text-center text-xl font-bold">Edit Food</h2>
          <div className="mt-8 flex flex-col gap-y-4">
            <div>
              <Image
                src={item.image}
                alt={`${item.id}-modal-dashboard-edit-food-image`}
                width={200}
                height={200}
                className="rounded-md"
              />
              <input
                type="file"
                className="file-input file-input-bordered w-full mt-2"
              />
            </div>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
              value={item.title}
            />
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
              value={item.price}
            />
          </div>
        </div>
        <div className="flex justify-end gap-x-2 mt-8">
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => {
              document
                .getElementById(`${item.id}-modal-dashboard-edit-food-close`)
                .click();
            }}
          >
            Cancel
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              document
                .getElementById(`${item.id}-modal-dashboard-edit-food-close`)
                .click();
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button id={`${item.id}-modal-dashboard-edit-food-close`}>close</button>
      </form>
    </dialog>
  );
};
