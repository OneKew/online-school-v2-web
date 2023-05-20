import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    shadows: ["none"],
    palette: {
        primary: {
            main: "#2b4ce3",
        },
    },
    typography: {
        button: {
            textTransform: "none",
            fontWeight: 400,
        },
    },
});