import { api } from "@/libs/api";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { z } from "zod";

const defaultData = {
  email: "",
  password: "",
};

export const useRegister = () => {
  const router = useRouter();
  const [form, setForm] = React.useState(defaultData);
  const [errors, setErrors] = React.useState(defaultData);

  const dataSchema = z.object({
    fullName: z.string(),
    username: z.string().min(6),
    email: z.string().email(),
    password: z.string().min(4),
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

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

  const handleSubmit = async () => {
    const isValid = dataValidation();
    if (!isValid) {
      return;
    }
    const toastId = toast.loading("Register");

    try {
      const response = await api.post("/auth/register", form);

      toast.success("Registrasi Berhasil", {
        id: toastId,
      });

      router.push("/login");
    } catch (error) {
      const message = error.response.data.message;
      console.log(error);
      toast.error(message, {
        id: toastId,
      });
    }
  };

  return { handleOnChange, handleSubmit, form, errors };
};
