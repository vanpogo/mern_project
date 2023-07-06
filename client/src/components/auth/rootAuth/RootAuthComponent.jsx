import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Register from "../register/Register.jsx";
import Login from "../login/Login.jsx";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  isCheckAuth,
  loginUser,
  registerUser,
} from "../../../redux/slices/auth/authSlice";

function RootAuthComponent() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(isCheckAuth);
  const { token } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (pathname === "/register") {
        const userData = { email, password, firstName, userName };
        dispatch(registerUser(userData));
      } else {
        const userData = { email, password };
        dispatch(loginUser(userData));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isAuth) {
      window.localStorage.setItem("token", token);
      navigate("/home");
    }
  }, [token]);
  return (
    <div className={styles.root}>
      <Box
        sx={{
          maxWidth: "650px",
          width: "calc(100% / 3)",
          margin: "auto",
          borderRadius: "5px",
          padding: "5px",
          boxShadow: "5px 5px 10px #000",
        }}
      >
        <form onSubmit={handleSubmit}>
          {pathname === "/register" ? (
            <Register
              setEmail={setEmail}
              setFirstName={setFirstName}
              setUserName={setUserName}
              setPassword={setPassword}
            />
          ) : pathname === "/login" ? (
            <Login setEmail={setEmail} setPassword={setPassword} />
          ) : null}
        </form>
      </Box>
    </div>
  );
}

export default RootAuthComponent;
