import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Grid } from "@mui/material";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
