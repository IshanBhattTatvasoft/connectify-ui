"use client";

import {
  TextField,
  InputAdornment,
  IconButton,
  TextFieldProps,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

type TextboxProps = Omit<TextFieldProps, "variant"> & {
  id: string;
  label: string;
  type?: string;
};

export default function Textbox({
  id,
  label,
  type = "text",
  ...props
}: TextboxProps) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="textbox-wrapper">
      <TextField
        id={id}
        label={label}
        type={isPassword && show ? "text" : type}
        variant="filled"
        InputProps={{
          disableUnderline: true,
          ...(isPassword && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShow((s) => !s)}
                  edge="end"
                  size="small"
                  sx={{ color: "#9ca3af" }}
                >
                  {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }),
        }}
        InputLabelProps={{ shrink: true }}
        // ---- STYLING ----
        sx={{
          // container
          "& .MuiFilledInput-root": {
            backgroundColor: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            height: "56px",
            display: "flex",
            alignItems: "center",
            "&:hover": { backgroundColor: "#f9f9f9" },
            "&.Mui-focused": { backgroundColor: "#fff" },
          },
          // label (shrink & normal)
          "& .MuiInputLabel-filled": {
            transform: "translate(14px, 20px) scale(1)",
            "&.MuiInputLabel-shrink": {
              transform: "translate(14px, 7px) scale(0.75)",
            },
          },
          // make the adornment inherit the white bg
          "& .MuiInputAdornment-root": {
            backgroundColor: "#fff",
            marginRight: "-12px",
            paddingRight: "12px",
          },
        }}
        {...props}
      />
    </div>
  );
}
