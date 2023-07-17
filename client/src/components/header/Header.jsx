import { Box, Grid, IconButton, InputBase } from "@mui/material";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { DarkMode } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ColorModeContext, tokens } from "../../theme/theme.js";
import { useTheme } from "@emotion/react";

function Header() {
  const { user } = useSelector((state) => state.auth);

  const theme = useTheme();
  const currentTheme = theme.palette.mode;
  const colors = tokens(theme.palette.mode);

  const colorContext = useContext(ColorModeContext);
  const useStyles = makeStyles({
    root: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  });

  const classes = useStyles();
  return (
    <>
      <Box
        component={"header"}
        display={"flex"}
        justifyContent={"space-between"}
        px={"32px"}
        py={"24px"}
        backgroundColor={colors.primary.DEFAULT}
      >
        <Grid>Welcome {user?.firstName ? user?.firstName : ""}</Grid>
        <Box display={"flex"} gap={"10px"}>
          <Grid onClick={colorContext.toggleColorMode}>
            <IconButton>
              {currentTheme === "dark" ? <LightModeIcon /> : <DarkMode />}
            </IconButton>
          </Grid>
          <Grid>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
          </Grid>
          <Grid
            sx={{
              background: colors.primary[600],
              width: "400px",
              border: `1px ${colors.white[200]} solid`,
              borderRadius: "5px",
            }}
          >
            <IconButton className={classes.root}>
              <SearchIcon></SearchIcon>
            </IconButton>
            <InputBase placeholder="Поиск"></InputBase>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Header;
