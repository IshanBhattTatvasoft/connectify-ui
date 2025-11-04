// components/Auth/AuthLayout.tsx
import { Box, Paper } from "@mui/material";
import React from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Box className="authPage">
      <Paper className="authCard" elevation={0}>
        {" "}
        {/* Use elevation={0} for subtle styling */}
        <Box className="logo">C</Box>
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
        {children}
      </Paper>
    </Box>
  );
};

export default AuthLayout;
