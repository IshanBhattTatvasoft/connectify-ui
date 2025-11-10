// src/components/auth/AuthLayout.tsx
import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <Box className="signup-container">
      {/* HERO – exact same structure */}
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

      {/* FORM – exact same class names */}
      <Box className="signup-form">
        <Typography variant="h4" className="form-title">
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="body2" className="form-subtitle">
            {subtitle}
          </Typography>
        )}

        <Box className="form-fields">{children}</Box>
      </Box>
    </Box>
  );
}
