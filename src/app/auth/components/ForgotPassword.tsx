// src/app/auth/steps/forgot-password.tsx
"use client";

import { Button } from "@mui/material";
import Textbox from "@/components/common/Textbox";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { ForgotPassword } from "@/services/auth.service";
import { forgotPasswordValidationSchema } from "@/utils/validation/auth";
import { useRouter } from "next/navigation";
import { STATUS_CODE } from "@/utils/constants";
import { useState } from "react";

export default function ForgotPasswordStep() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await ForgotPassword(values.email);
        toast.success(res.message);
        if (res.statusCode === STATUS_CODE.Success) {
          router.push(
            `/auth?step=otp&email=${encodeURIComponent(values.email)}`
          );
        }
      } catch (err: any) {
        toast.error(err?.response?.data?.message ?? "Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Textbox
        id="email"
        label="Email"
        name="email"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        className="create-btn"
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? "Sending..." : "Send OTP"}
      </Button>
    </form>
  );
}
