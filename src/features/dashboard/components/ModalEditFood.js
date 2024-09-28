import Image from "next/image";
import React from "react";
import { useEditFood } from "../hooks/useEditFood";
import { SingleLineText } from "@/components/fields/SingleLineText";
import { FileUpload } from "@/components/fields/FileUpload";

export const ModalEditFood = ({ item, handleRefetch }) => {
  const {
    errors,
    form,
    handleEdit,
    handleOnChange,
    error,
    file,
    handleFileChange,
  } = useEditFood({
    item,
    handleRefetch,
  });

  return (
    <dialog id={`${item.id}-modal-dashboard-edit-food`} className="modal">
      <div className="modal-box">
        <div className="">
          <h2 className="text-center text-xl font-bold">Edit Food</h2>
          <div className="mt-8 flex flex-col gap-y-4">
            <FileUpload
              name="image"
              label="Image"
              onChange={handleFileChange}
              value={file}
              error={error}
              currentValue={item.image}
            />
            <SingleLineText
              name="title"
              label="Title"
              placeholder="Input Title Food ..."
              onChange={handleOnChange}
              value={form?.title}
              error={errors.title}
            />
            <SingleLineText
              type="number"
              name="price"
              label="Price"
              placeholder="Input Price Food ..."
              onChange={handleOnChange}
              value={form?.price}
              error={errors.price}
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
            onClick={() => handleEdit()}
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
