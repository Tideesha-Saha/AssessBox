import React, { useState } from "react";

import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Input = ({ value, onChange, placeholder, type, label }) => {
  const [showPassword, setShowPassword] = useState(false);
 
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-5">
      <label htmlFor="" className="text-slate-800 text-[13px]">
        {label}
      </label>
      {/* <div className="input-box mt-1 bg-white"> */}
      <div className="mt-1 bg-white border border-gray-100 rounded-md flex items-center px-3 py-2 shadow-xs">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className="bg-white w-full outline-none"
          value={value}
          onChange={(e) => onChange(e)}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <IoMdEye
                size={20}
                onClick={() => toggleShowPassword()}
                className="cursor-pointer"
              />
            ) : (
              <IoMdEyeOff
                size={20}
                onClick={() => toggleShowPassword()}
                className="cursor-pointer"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
