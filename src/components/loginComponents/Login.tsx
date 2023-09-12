import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import { useLoginUserMutation } from '../../store/authApi'
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [typeError, setTypeError] = useState<string>('')

  const [login] = useLoginUserMutation()

  const handleClick = async () => {
    await login(
      {
        email: email,
        password: password
      }).unwrap()
      .then(() => navigate("/"))
      .catch(error => setTypeError(error.data.error))
  }

  return (
    <Grid container
      sx={{ height: "100vh", textAlign: "center" }}
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Box sx={{ flexDirection: "column", display: "flex", gap: "15px" }}>
        <Typography variant='h5' color="GrayTexts">
          Войти в приложение
        </Typography>
        <TextField
          label="Почта"
          variant="standard"
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          type='password'
          label="Пароль"
          variant="standard"
          onChange={e => setPassword(e.target.value)}
        />
        <Typography color="error">
          {typeError}
        </Typography>
        <Button disabled={!email} variant="contained" type="reset" onClick={handleClick}>
          Войти
        </Button>
        <Button
          variant="outlined"
          type="reset"
          component={Link}
          to="/registration"
        >
          Регистрация
        </Button>
      </Box>
    </Grid>
  )
}

export default Login