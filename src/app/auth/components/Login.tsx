// src/app/auth/steps/login.tsx
"use client";

import { Box, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import Textbox from "@/components/common/Textbox";
import { handleGoogleSignup } from "@/utils/helper";

export default function LoginStep() {
  return (
    <>
      <Textbox id="email" label="Email" name="email" fullWidth />
      <Textbox
        id="password"
        name="password"
        label="Password"
        type="password"
        fullWidth
      />

      <Typography variant="body2" className="form-subtitle">
        <Link
          href="/auth?step=forgot-password"
          className="login-link"
          style={{ textAlign: "right" }}
        >
          <Typography variant="body2">Forgot Password?</Typography>
        </Link>
      </Typography>

      <Button variant="contained" fullWidth className="create-btn">
        Login
      </Button>

      <Typography align="center" className="divider" mt={2}>
        or sign-in with
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
    </>
  );
}
