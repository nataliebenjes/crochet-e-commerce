import { createTheme } from '@mui/material/styles';
export const shades = {
  primary: {
    100: "#fdefe8",
    200: "#fcdfd1",
    300: "#facfbb",
    400: "#f9bfa4",
    500: "#f7af8d",
    600: "#c68c71",
    700: "#946955",
    800: "#634638",
    900: "#31231c"
  },
  secondary: {
    100: "#d7ecf2",
    200: "#afdae5",
    300: "#87c7d9",
    400: "#5fb5cc",
    500: "#37a2bf",
    600: "#2c8299",
    700: "#216173",
    800: "#16414c",
    900: "#0b2026"
  },
  info: {
    100: "#dbd9e9",
    200: "#b8b4d3",
    300: "#948ebd",
    400: "#7169a7",
    500: "#4d4391",
    600: "#3e3674",
    700: "#2e2857",
    800: "#1f1b3a",
    900: "#0f0d1d"
  },
}

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500]
    },
    secondary: {
      main: shades.blue[500]
    },
    info: {
      dark: shades.info[700],
      main: shades.info[500],
      light: shades.info[100]
    }
  },
  typography: {
    fontFamily: ["Lobster", "sans-serif"].join(','),
    fontSize: 11,
    h1: {
      fontFamily: ["Dosis", "sans-serif"].join(','),
    fontSize: 48,
    },
    h2: {
      fontFamily: ["Dosis", "sans-serif"].join(','),
    fontSize: 36,
    },
    h3: {
      fontFamily: ["Dosis", "sans-serif"].join(','),
    fontSize: 20,
    },
    h4: {
      fontFamily: ["Dosis", "sans-serif"].join(','),
    fontSize: 14,
    },
}
}
)
