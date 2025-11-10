// src/app/auth/steps/signup.tsx
"use client";

import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import Textbox from "@/components/common/Textbox";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Signup } from "@/services/auth.service";
import { SignupSchema } from "@/utils/validation/auth";
import { handleGoogleSignup } from "@/utils/helper";
import { useRouter } from "next/navigation";

export default function SignupStep() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema: SignupSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        await Signup({ email: values.email, password: values.password });
        toast.success("Signup successful!");
        resetForm();
        router.push("/welcome");
      } catch (err: any) {
        toast.error(err.response?.data?.message ?? "Something went wrong!");
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
        sx={{ mt: 2 }}
      >
        {loading ? "Signing Up..." : "Sign Up"}
      </Button>

      <Typography variant="body2" align="center" mt={2}>
        Already have an account?{" "}
        <Link href="/auth?step=login" className="login-link">
          Login here
        </Link>
      </Typography>

      <Typography align="center" className="divider" mt={2}>
        or sign-up with
      </Typography>

      <Box className="social-buttons" mt={1}>
        <Button
          startIcon={<GoogleIcon />}
          variant="outlined"
          fullWidth
          onClick={handleGoogleSignup}
        >
          Google
        </Button>
      </Box>
    </form>
  );
}
