import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#ff9800" // CAM CHỦ ĐẠO
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f7f7f7"
      }
    },
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: "red",
          },
        },
      },
    }
  });
