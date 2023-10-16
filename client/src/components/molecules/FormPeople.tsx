import React from "react";
import FormMedium from "../atoms/FormMedium";

interface FormPeopleProps {}

export const FormPeople = ({}: FormPeopleProps) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <FormMedium />
        <div>以上</div>
        <FormMedium />
        <div>以下</div>
      </div>
    </>
  );
};

export default FormPeople;
