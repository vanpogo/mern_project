import React from "react";
import { BoxMenuItem, useStyles } from "./styles";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { tokens } from "../../theme/theme";
import FlexBetween from "../flex-between/FlexBetween";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./style.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/slices/auth/authSlice";
import LOGO from "../../assets/images/logo.png";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

function Sidebar(props) {
  const dispatch = useDispatch();
  const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;

  const menu = [
    "Dashboard",
    "Analytics",
    "Products",
    "Orders",
    "Enquiry",
    "Marketing",
    "Settings",
  ];
  //THEME
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const classes = useStyles(theme.palette.mode);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      {isOpen && (
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant="persistent"
          sx={{
            width: drawerWidth,
            "& 	.MuiDrawer-paper": {
              color: colors.secondary.DEFAULT,
              background: theme.palette.primary.main,
              boxSizing: "border-box",
              width: drawerWidth,
              // ,
            },
          }}
        >
          <FlexBetween>
            <Box sx={{ padding: "40px 16px 0 15px", display: "flex" }}>
              <Box
                onClick={() => navigate("/")}
                component={"div"}
                sx={{
                  backgroundImage: `url(${LOGO})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "50px",
                  backgroundPosition: "center",
                  cursor: "pointer",
                }}
              />
              <Typography variant="h3" className={classes.logo}>
                Demo
              </Typography>
            </Box>
            <Box sx={{ padding: "20px 16px 0 15px" }} marginTop={"45px"}>
              <List>
                {menu.map((name, index) => (
                  <BoxMenuItem
                    key={index}
                    onClick={() => navigate(`/${name.toLowerCase()}`)}
                    className={`${classes.navItem} ${
                      pathname === `/${name.toLowerCase()}`
                        ? classes.active
                        : ""
                    }`}
                  >
                    <Typography>{name}</Typography>
                  </BoxMenuItem>
                ))}
              </List>
            </Box>
            <Divider
              component={"div"}
              sx={{ marginTop: "30px", background: colors.secondary.DEFAULT }}
            />
            <Box sx={{ padding: "20px 16px 0 15px" }}>
              <List>
                <ListItem className={classes.sidebar_footer}>
                  <AccountBoxOutlinedIcon />
                  <Typography marginLeft={"10px"}>User</Typography>
                </ListItem>
                <ListItem
                  onClick={() => {
                    dispatch(logOut());
                    window.localStorage.removeItem("token");
                    navigate("/login");
                  }}
                  className={classes.sidebar_footer}
                >
                  <LogoutIcon />
                  <Typography marginLeft={"10px"}>Logout</Typography>
                </ListItem>
              </List>
            </Box>
          </FlexBetween>
        </Drawer>
      )}
    </>
  );
}

export default Sidebar;
