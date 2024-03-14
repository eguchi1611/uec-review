"use client";

import { createTheme } from "@mui/material";
import { Noto_Sans_JP } from "next/font/google";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9D3FF6",
    },
  },
  typography: {
    fontFamily: noto_sans_jp.style.fontFamily,
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
    MuiPaper: {
      defaultProps: {
        variant: "outlined",
      },
    },
  },
});

export default theme;
