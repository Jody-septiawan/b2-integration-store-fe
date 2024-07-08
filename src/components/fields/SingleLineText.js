import React from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const SingleLineText = ({
  label,
  placeholder,
  error,
  type = "text",
  value,
  name,
  onChange,
}) => {
  const [isHide, setIsHide] = React.useState(true);

  const toggleIsHide = () => {
    setIsHide((prev) => !prev);
  };

  return (
    <label className="form-control w-full">
      {label && (
        <div className="label">
          <span className="!text-xs">{label}</span>
        </div>
      )}
      <label
        className={`input input-bordered input-sm ${
          error && "border-error"
        } flex items-center gap-2`}
      >
        <input
          type={isHide ? type : "text"}
          placeholder={placeholder}
          className="grow"
          value={value ?? ""}
          name={name}
          onChange={onChange}
        />
        {type === "password" && (
          <>
            {!isHide && (
              <FaEye className="cursor-pointer" onClick={toggleIsHide} />
            )}
            {isHide && (
              <FaEyeSlash className="cursor-pointer" onClick={toggleIsHide} />
            )}
          </>
        )}
      </label>
      {error && (
        <div className="label">
          <span className="!text-xs text-error">{error}</span>
        </div>
      )}
    </label>
  );
};
