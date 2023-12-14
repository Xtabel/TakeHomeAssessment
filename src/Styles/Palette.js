import { createTheme } from "@mui/material";
import { lime, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#292929",
      light:"#E8E8E8"
    },
    secondary: {
      main: '#AA263D',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'sans-serif',
    ].join(','),
  },

});

