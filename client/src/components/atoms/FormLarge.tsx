import React from "react";

interface FormLargeProps {}

export const FormLarge = ({}: FormLargeProps) => {
  return (
    <>
      <input
        type="number"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </>
  );
};

export default FormLarge;
