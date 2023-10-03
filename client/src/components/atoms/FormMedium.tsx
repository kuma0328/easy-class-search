import React from "react";

interface FormMediumProps {}

export const FormMedium = ({}: FormMediumProps) => {
  return (
    <input
      type="text"
      className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  );
};

export default FormMedium;
