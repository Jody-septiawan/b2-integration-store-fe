import { api } from "@/libs/api";
import React from "react";
import toast from "react-hot-toast";
import { z } from "zod";

const defaultDataEmpty = {
  title: undefined,
  price: undefined,
};

export const useEditFood = ({ item, handleRefetch }) => {
  const defaultData = {
    title: item.title,
    price: Number(item.price),
    image: item.image,
  };

  const [form, setForm] = React.useState(defaultData);
  const [errors, setErrors] = React.useState(defaultDataEmpty);
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState("");

  const dataSchema = z.object({
    title: z.string(),
    price: z.number(),
  });

  const handleUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);

      toast.error("Failed Upload image");
    }
  };

  const handleFileChange = (selectedFile) => {
    if (
      selectedFile.type !== "image/jpeg" &&
      selectedFile.type !== "image/png"
    ) {
      setError("Hanya file gambar (JPG, PNG) yang diizinkan.");
      return;
    }

    setFile(selectedFile);
    setError("");
  };

  const handleOnChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "price") {
      value = Number(value);
    }

    setForm({
      ...form,
      [name]: value,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const dataValidation = () => {
    const result = dataSchema.safeParse(form);

    if (!result.success) {
      const validErrors = result.error.errors;
      validErrors.forEach((error) => {
        const name = error.path[0];
        const msg = error.message;

        setErrors((prev) => ({
          ...prev,
          [name]: msg,
        }));
      });

      return false;
    } else {
      return true;
    }
  };

  const handleEdit = async () => {
    const isValid = dataValidation();
    if (!isValid) {
      return;
    }
    const toastId = toast.loading("Edit Food");

    try {
      const body = {
        ...form,
      };

      if (file != null) {
        const imageUpload = await handleUploadImage();

        body.image = imageUpload.url;
      }

      await api.patch(`/foods/${item.id}`, body);

      handleRefetch();

      document
        .getElementById(`${item.id}-modal-dashboard-edit-food-close`)
        .click();

      toast.success("Edit Food Success", {
        id: toastId,
      });
    } catch (error) {
      console.log(error);
      const message = error.response.data.message;
      toast.error(message, {
        id: toastId,
      });
    }
  };

  return {
    handleEdit,
    handleOnChange,
    form,
    errors,
    file,
    error,
    handleFileChange,
  };
};
