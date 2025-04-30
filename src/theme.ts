import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#1C2A3A", // Azul escuro
    },
    secondary: {
      main: "#F5F5F5", // Cinza claro
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  }
});

theme = responsiveFontSizes(theme)
export default theme;
