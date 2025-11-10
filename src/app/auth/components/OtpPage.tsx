// src/app/auth/steps/otp.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import { maskEmail } from "@/utils/helper";
import { Common } from "@/utils/constants";

interface OtpStepProps {
  email?: string;
}

export default function OtpStep({ email }: OtpStepProps) {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState(60);

  // auto-focus first box
  useEffect(() => {
    document.getElementById("otp-0")?.focus();
  }, []);

  // countdown
  useEffect(() => {
    if (timer === 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const val = e.target.value;
    if (!Common.RegularExpression.DigitsRegularExp.test(val)) return;

    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    setError(null);

    if (val && idx < 5) {
      document.getElementById(`otp-${idx + 1}`)?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key !== "Backspace") return;
    const newOtp = [...otp];
    if (!newOtp[idx] && idx > 0) {
      document.getElementById(`otp-${idx - 1}`)?.focus();
    }
    newOtp[idx] = "";
    setOtp(newOtp);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const paste = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (paste.length === 6) {
      setOtp(paste.split(""));
      document.getElementById("otp-5")?.focus();
    }
  };

  return (
    <>
      <Box textAlign="center" mb={3}>
        Enter the OTP sent to <strong>{maskEmail(email ?? "")}</strong>
      </Box>

      <Box display="flex" justifyContent="center" gap={1}>
        {otp.map((_, i) => (
          <TextField
            key={i}
            id={`otp-${i}`}
            value={otp[i]}
            onChange={(e) => handleChange(e as any, i)}
            onKeyDown={(e) => handleKeyDown(e as any, i)}
            onPaste={handlePaste}
            inputProps={{
              maxLength: 1,
              style: { textAlign: "center", fontSize: "18px" },
            }}
            sx={{
              width: 50,
              "& .MuiOutlinedInput-input": { py: 1.2 },
            }}
            variant="outlined"
            error={!!error}
          />
        ))}
      </Box>

      <Box textAlign="center" mt={2} fontSize="0.9rem" color="text.secondary">
        {timer > 0 ? `Resend in ${timer}s` : <a href="#">Resend OTP</a>}
      </Box>
    </>
  );
}
