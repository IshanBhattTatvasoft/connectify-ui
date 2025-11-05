"use client";

import { Box, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import Textbox from "@/components/common/Textbox";

export default function Login() {
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
            Log in
          </Link>
        </Typography>

        <Box className="form-fields">
          <Textbox id="email" label="Email" name="email" fullWidth />
          <Textbox
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
          />

          <Button variant="contained" fullWidth className="create-btn">
            Create account
          </Button>

          <Typography align="center" className="divider">
            or register with
          </Typography>

          <Box className="social-buttons">
            <Button startIcon={<GoogleIcon />} variant="outlined" fullWidth>
              Google
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
