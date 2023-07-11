import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Login(props) {
  const { setEmail, setPassword } = props;

  return (
    <div className={styles.root}>
      <Typography margin="normal" fontSize={"3vw"} fontFamily={"Poppins"}>
        Авторизация
      </Typography>

      <TextField
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        margin="normal"
        required
        fullWidth
        variant="outlined"
        label="Email"
        placeholder="Введите ваш email"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        margin="normal"
        required
        fullWidth
        variant="outlined"
        label="Password"
        placeholder="Введите ваш password"
      />
      <Button
        type="submit"
        sx={{ width: "calc(100% - 30px)", marginTop: "20px" }}
        variant="contained"
        margin="normal"
      >
        Регистрация
      </Button>
      <Typography
        fontFamily={"Poppins"}
        sx={{
          fontSize: "12px",
          marginTop: "20px",
          textTransform: "capitalize",
        }}
      >
        у вас нет аккаунта?
        <span className={styles.link}>
          <Link className={styles.link} to={"/register"}>
            регистрироваться
          </Link>
        </span>
      </Typography>
    </div>
  );
}

export default Login;
