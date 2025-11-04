// pages/login.tsx
"use client";
import React from "react";
import { TextField, Button, Grid, Link as MuiLink } from "@mui/material"; // Using stable Grid
import GoogleIcon from "@mui/icons-material/Google";
import { NextPage } from "next";
import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define the shape of your form data
interface LoginFormValues {
  email: string;
  password: string;
}

// Define the validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage: NextPage = () => {
  const initialValues: LoginFormValues = { email: "", password: "" };

  const handleSubmit = (values: LoginFormValues, { setSubmitting }: any) => {
    console.log("Logging in with Formik values:", values);
    // Simulate API call
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      // TODO: Implement actual login logic (e.g., API call, token storage)
    }, 400);
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google...");
    // TODO: Implement Google OAuth login logic
  };

  return (
    <AuthLayout
      title="Welcome back to Connectify"
      subtitle="Sign in to connect with your community"
    >
      {/* Formik Wrapper */}
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          // Formik's Form component replaces the regular <form> tag
          <Form>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                {/* Formik Field for Email */}
                <Field
                  as={TextField} // Use MUI TextField component
                  fullWidth
                  label="Email address"
                  placeholder="Enter your email"
                  name="email"
                  variant="outlined"
                  error={touched.email && !!errors.email}
                  helperText={<ErrorMessage name="email" />}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                {/* Formik Field for Password */}
                <Field
                  as={TextField}
                  fullWidth
                  label="Password"
                  placeholder="Enter your password"
                  name="password"
                  type="password"
                  variant="outlined"
                  error={touched.password && !!errors.password}
                  helperText={<ErrorMessage name="password" />}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  className="primaryButton"
                  disabled={isSubmitting} // Disable button while submitting
                >
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      <p className="orSeparator">Or continue with</p>

      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        className="googleButton"
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </Button>

      <p className="linkText">
        New to Connectify?{" "}
        <Link href="/signup" passHref legacyBehavior>
          <MuiLink>Create an account</MuiLink>
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
