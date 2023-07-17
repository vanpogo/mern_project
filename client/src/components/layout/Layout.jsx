import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { Box, useMediaQuery } from "@mui/material";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();

  const isNonMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    isNonMobile ? setIsOpen(false) : setIsOpen(true);
  }, [isNonMobile]);

  return pathname === "/login" || pathname === "/register" ? (
    <>{children}</>
  ) : (
    <Box
      display={isNonMobile ? "block" : "flex"}
      justifyContent="space-between"
      width="100%"
      height="100%"
    >
      {isOpen && (
        <Sidebar
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <Box width={"100%"}>
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isNonMobile={isNonMobile}
        />
        {children}
      </Box>
    </Box>
  );
}
export default Layout;
