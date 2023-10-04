import React from "react";
import FormMedium from "../atoms/FormMedium";

interface FormPeopleProps {}

export const FormPeople = ({}: FormPeopleProps) => {
  return (
    <>
      <div className="flex flex-row">
        <FormMedium />
        <div>-</div>
        <FormMedium />
      </div>
    </>
  );
};

export default FormPeople;
