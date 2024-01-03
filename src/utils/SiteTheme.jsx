import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const SiteTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#4540DF",
        contrastText: "#fff",
      },
      secondary: {
        main: "#E9EDF3",
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default SiteTheme;
