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
import { AuthService } from "@/services/auth.service";

// ✅ Validation Schema
const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function Signup() {
  const [loading, setLoading] = useState(false);

  // ✅ Formik setup
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
        const res = await AuthService.signup({
          email: values.email,
          password: values.password,
        });

        toast.success("Signup successful!");
        console.log("Signup success:", res);
        resetForm();
      } catch (err: any) {
        console.error("Signup error:", err);
        toast.error(err.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  // ✅ Google signup
  const handleGoogleSignup = async (credentialResponse: any) => {
    try {
      const id_token = credentialResponse?.credential;
      if (!id_token) {
        toast.error("Google sign-in failed");
        return;
      }

      const res = await AuthService.signup({ id_token });
      toast.success("Google signup successful!");
      console.log("Google signup success:", res);

      // optional: store tokens
      // localStorage.setItem("access_token", res.access_token);
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Google signup failed!");
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
          Create an account
        </Typography>

        <Typography variant="body2" className="form-subtitle">
          Already have an account?{" "}
          <Link href="/login" className="login-link">
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
