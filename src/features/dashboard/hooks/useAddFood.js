import { api } from "@/libs/api";
import React from "react";
import toast from "react-hot-toast";
import { z } from "zod";

const defaultData = {
  title: undefined,
  price: undefined,
  image: "https://plus.unsplash.com/premium_photo-1694708455249-992010f9db32",
};

export const useAddFood = ({ handleRefetch }) => {
  const [form, setForm] = React.useState(defaultData);
  const [errors, setErrors] = React.useState(defaultData);
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState("");

  const dataSchema = z.object({
    title: z.string(),
    price: z.number(),
  });

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

  const handleSubmit = async () => {
    const isValid = dataValidation();
    if (!isValid) {
      return;
    }
    const toastId = toast.loading("Add Food");

    try {
      const imageUpload = await handleUploadImage();

      const body = {
        ...form,
        image: imageUpload.url,
      };

      const response = await api.post("/foods", body);

      handleRefetch();

      toast.success("Add Food Success", {
        id: toastId,
      });

      document.getElementById(`modal-dashboard-add-food-close`).click();
    } catch (error) {
      const message = error.response.data.message;
      console.log(error);
      toast.error(message, {
        id: toastId,
      });
    }
  };

  return {
    handleSubmit,
    errors,
    handleOnChange,
    form,
    handleFileChange,
    file,
    error,
  };
};
