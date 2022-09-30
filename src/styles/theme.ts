import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
    palette: {
        primary: {
            main: "#EC1D24",
        },
        secondary: {
            main: "#FFFFFF",
        },
        text: {
            primary: "#000000",
            secondary: "#FFFFFF",
        },
        background: {
            default: "#F5F5F5",
            paper: "#FFFFFF",
        },
    },
});

export default theme;