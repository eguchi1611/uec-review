"use client";

import { useTheme } from "@mui/material";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

export function Providers({ children }: PropsWithChildren) {
  const theme = useTheme();
  return (
    <>
      {children}
      <ToastContainer
        position="bottom-left"
        theme={theme.palette.mode === "dark" ? "dark" : "light"}
      />
    </>
  );
}
