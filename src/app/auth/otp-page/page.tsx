"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { maskEmail } from "@/utils/helper";
import { Common } from "@/utils/constants";

type OtpPageProps = {
  email?: string | null;
};

const OtpPage: React.FC<OtpPageProps> = ({ email }) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(60);
  const otp_expiry_time = useRef(0);

  useEffect(() => {
    const firstInput = document.getElementById("otp-input-0");
    if (firstInput) {
      (firstInput as HTMLInputElement).focus();
    }
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const digitsRegExp = Common.RegularExpression.DigitsRegularExp;

    if (!digitsRegExp.test(value)) {
      // setError(t("auth.resetPasswordOtp.validation.resetPasswordOTPNumberAllowed"));
      return;
    }
    if (digitsRegExp.test(value)) {
      setError(null);
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);
    }
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const updatedOtp = [...otp];
      if (otp[index] === "" && index > 0) {
        const prevInput = document.getElementById(`otp-input-${index - 1}`);
        updatedOtp[index - 1] = "";
        if (prevInput) (prevInput as HTMLInputElement).focus();
      } else {
        updatedOtp[index] = "";
      }
      setOtp(updatedOtp);

      const isAllEmpty = updatedOtp.every((digit) => digit === "");
      if (isAllEmpty) {
        setError('Otp Required');
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "");
    if (pasteData.length === otp.length) {
      const updatedOtp = pasteData.slice(0, otp.length).split("");
      setOtp(updatedOtp);
      setError(null);
      const lastInput = document.getElementById(`otp-input-${otp.length - 1}`);
      if (lastInput) (lastInput as HTMLInputElement).focus();
    }
  };

  return (
    <Box className="signup-container">
      <Box className="signup-hero">
        <Box className="hero-header">
          <Typography variant="h6" className="logo">
            Welcome to Connectify
          </Typography>
        </Box>

        <Box className="hero-footer">
          <Typography variant="h5" className="hero-text">
            Share Thoughts,
            <br />
            Gain Knowledge
          </Typography>
        </Box>
      </Box>

      <Box className="signup-form">
        <Typography variant="h4" className="form-title">
          Enter the OTP
        </Typography>

        <Typography variant="body2" className="form-subtitle">
          Enter the OTP sent to {maskEmail(email ?? "")}
        </Typography>

        <div className="otp-input-container">
          <Box
            display="flex"
            justifyContent="space-between"
            m={2}
            gap={1}
            className={"grid-opt"}
          >
            {otp.map((value, index) => (
              <TextField
                key={index}
                id={`otp-input-${index}`}
                value={value}
                variant="outlined"
                error={Boolean(error)}
                onChange={(e) =>
                  handleChange(e as React.ChangeEvent<HTMLInputElement>, index)
                }
                onKeyDown={(e) =>
                  handleBackspace(
                    e as React.KeyboardEvent<HTMLInputElement>,
                    index
                  )
                }
                onPaste={handlePaste}
                slotProps={{
                  input: {
                    inputProps: {
                      maxLength: 1,
                      style: {
                        textAlign: "center",
                        fontSize: "18px",
                      },
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-input": {
                    padding: "10px",
                    textAlign: "center",
                  },
                  "@media (max-width:400px)": {
                    mx: 0,
                    "& .MuiOutlinedInput-input": {
                      padding: "0px",
                      margin: "0px",
                      fontSize: "16px",
                      width: "40px",
                      height: "35px",
                    },
                  },
                }}
              />
            ))}
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default OtpPage;
