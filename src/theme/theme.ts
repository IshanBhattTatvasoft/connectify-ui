"use client";

import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED", // vivid purple
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F3FF", // soft lavender background
      paper: "#FFFFFF", // white cards
    },
    text: {
      primary: "#111111",
      secondary: "#4B5563",
    },
    divider: "#E5E7EB",
  },
  typography: {
    fontFamily: "'Lexend', sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8B5CF6", // soft glowing purple
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#1C1B29", // deep navy-purple tone
      paper: "#2A273F", // card background
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A1A1AA",
    },
    divider: "#3F3F46",
  },
  typography: {
    fontFamily: "'Lexend', sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});
