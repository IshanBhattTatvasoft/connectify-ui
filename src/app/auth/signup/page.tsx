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
import { Signup } from "@/services/auth.service";
import { SignupSchema } from "@/utils/validation/auth";
import { handleGoogleSignup } from "@/utils/helper";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setLoading(true);
      try {
        const res = await Signup({
          email: values.email,
          password: values.password,
        });

        toast.success("Signup successful!");
        console.log("Signup success:", res);
        resetForm();
        router.push("/welcome");
      } catch (err: any) {
        console.error("Signup error:", err);
        toast.error(err.response?.data?.message || "Something went wrong!");
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
          Create an account
        </Typography>

        <Typography variant="body2" className="form-subtitle">
          Already have an account?{" "}
          <Link href="/auth/login" className="login-link">
            Login here
          </Link>
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

            <Textbox
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Textbox
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
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

            <Typography align="center" className="divider">
              or sign-up with
            </Typography>

            <Box className="social-buttons">
              <Button
                startIcon={<GoogleIcon />}
                variant="outlined"
                fullWidth
                onClick={handleGoogleSignup}
              >
                Google
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
