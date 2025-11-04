'use client';

import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F59E0B',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111111',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F59E0B',
    },
    background: {
      default: '#1E1E1E',
      paper: '#2C2C2C',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});
