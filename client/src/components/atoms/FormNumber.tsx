import { TextField } from "@mui/material";
import React from "react";

interface FormNumberProps {}

export const FormNumber = ({}: FormNumberProps) => {
  return (
    <>
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    </>
  );
};

export default FormNumber;
