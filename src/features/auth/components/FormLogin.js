import { SingleLineText } from "@/components/fields/SingleLineText";
import Link from "next/link";
import React from "react";
import { useLogin } from "../hooks/useLogin";

export const FormLogin = () => {
  const { handleOnChange, form, handleSubmit, errors } = useLogin();

  return (
    <div className="w-full flex flex-col gap-y-10">
      <h2 className="text-center text-xl text-primary font-bold">Login</h2>
      <div className="flex flex-col gap-y-3">
        <SingleLineText
          name="email"
          label="Email"
          placeholder="Input Email ..."
          onChange={handleOnChange}
          value={form?.email}
          error={errors.email}
        />
        <SingleLineText
          name="password"
          type="password"
          label="Password"
          placeholder="Input Password ..."
          onChange={handleOnChange}
          value={form?.password}
          error={errors.password}
        />
      </div>
      <div>
        <button
          className="btn btn-sm btn-primary w-full"
          onClick={handleSubmit}
        >
          Login
        </button>
        <p className="text-xs pt-2 text-center">
          Dont have Account?{" "}
          <Link href="/register" className="cursor-pointer text-secondary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
