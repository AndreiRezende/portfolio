import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#263238",
    },
    secondary: {
      main: "#9CD9F9", 
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  }
});

theme = responsiveFontSizes(theme)

export default theme;
