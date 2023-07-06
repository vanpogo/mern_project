import React from 'react';
import { Button, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';

function Register(props) {
  const{setEmail,setPassword,setUserName,setFirstName} = props;

  return (
    <div className= {styles.root}>
        <Typography margin= "normal" fontSize={"3vw"} fontFamily={"Poppins"}>Регистрация</Typography>
        <TextField  onChange={e => setFirstName(e.target.value)}
                    type='text'
                    name='firstName'
                    margin='normal' 
                    required 
                    fullWidth 
                    variant="outlined" 
                    label="Firstname" 
                    placeholder='Введите ваш firstname'/>
        <TextField  onChange={e => setUserName(e.target.value)}
                    type='text' 
                    label="Username"
                    name='userName' 
                    fullWidth 
                    required  
                    variant='outlined' 
                    placeholder='Введите ваш username' 
                    margin='normal' />
        <TextField  onChange={e => setEmail(e.target.value)}
                    type='email' 
                    margin='normal'
                    name='email' 
                    required 
                    fullWidth 
                    variant="outlined" 
                    label="Email" 
                    placeholder='Введите ваш email'/>
        <TextField  onChange={e => setPassword(e.target.value)}
                    type='password' 
                    margin='normal' 
                    required 
                    fullWidth
                    name='password' 
                    variant="outlined" 
                    label="Password" 
                    placeholder='Введите ваш password'/>
        <Button type='submit'
                sx={{width:"calc(100% - 30px)",marginTop:"20px"}}
                variant="contained"
                margin = "normal">Регистрация</Button>
        <Typography fontFamily={"Poppins"}
                    sx={{fontSize:"12px",
                        marginTop:"20px",
                        textTransform:"capitalize"}}>у вас есть аккаунт?<span className={styles.link}><Link className={styles.link} to={"/login"}>   Войти</Link></span></Typography>
    </div>
  )
}

export default Register
