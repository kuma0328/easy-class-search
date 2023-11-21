import { Checkbox } from "@mui/material";
import React from "react";
interface FormCheckBoxProps {}

export const FormCheckBox = ({}: FormCheckBoxProps) => {
  return (
    <>
      <Checkbox defaultChecked color="secondary" />
    </>
  );
};

export default FormCheckBox;
