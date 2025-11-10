// src/app/welcome/page.tsx
"use client";

import { Box, Typography } from "@mui/material";

export default function WelcomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Welcome to Connectify 🎉
      </Typography>
    </Box>
  );
}
