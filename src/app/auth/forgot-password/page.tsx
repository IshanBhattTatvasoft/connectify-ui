"use client";

import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import Textbox from "@/components/common/Textbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { ForgotPassword, Signup } from "@/services/auth.service";
import { forgotPasswordValidationSchema, SignupSchema } from "@/utils/validation/auth";
import { handleGoogleSignup } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { STATUS_CODE } from "@/utils/constants";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      try {
        const res = await ForgotPassword(values.email);
        toast.success(`${res.message}`);
        console.log("Signup success:", res);
        resetForm();
        if(res.statusCode === STATUS_CODE.Success){
            router.push('/auth/otp-page')
        }
      } catch (err: any) {
        console.error("Signup error:", err);
        toast.error(err || "Something went wrong!");
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

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
          Forgot Password
        </Typography>

        <Typography variant="body2" className="form-subtitle">
          Enter your email to get the OTP
        </Typography>

        {/* ✅ Formik Form */}
        <form onSubmit={formik.handleSubmit}>
          <Box className="form-fields">
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
              disabled={loading || formik.isSubmitting}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
