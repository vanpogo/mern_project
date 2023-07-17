import { makeStyles, styled } from "@mui/styles";
import { tokens } from "../../theme/theme";
import { Box, ListItem } from "@mui/material";

export const useStyles = makeStyles((theme) => {
  const colors = tokens(theme);
  return {
    logo: {
      fontSize: "28px",
      color:
        theme.palette.mode === "dark"
          ? colors.white.DEFAULT
          : colors.black.DEFAULT,
      fontWeight: "500",
    },
    link: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyItems: "center",
      textDecoration: "none",
    },
    active: {
      background: colors.blue,
      color: "white",
    },
    sidebar_footer: {
      display: "flex",
      marginTop: "10px",
      cursor: "pointer",
      border: `1px  ${colors.secondary}`,
      "&:hover": {
        background: colors.secondary,
      },
      listStyleType: "none",
    },
    navItem: {
      "&:hover": {
        background: colors.blue,
        color: "white",
      },
      borderRadius: "4px",
    },
  };
});

export const BoxMenuItem = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  cursor: "pointer",
  listStyleType: "none",
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "Poppins",
  width: "100%",
  marginTop: "10px",
});
