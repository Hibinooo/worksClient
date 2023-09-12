import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useCreateUserMutation } from '../../store/authApi'
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [name, setName] = useState<string>()
  const [typeError, setTypeError] = useState('')
  const [disabled, setDisabled] = useState(true)

  const [register] = useCreateUserMutation()

  const handleClick = async () => {
    await register(
      {
        name: name,
        email: email,
        password: password
      }).unwrap()
      .then(() => navigate("/login"))
      .catch(error => setTypeError(error.data.error))
  }

  useEffect(() => {
    if (!!name && !!email && !!password)
      setDisabled(false)
    else
      setDisabled(true)
  }, [name, email, password]);

  return (
    <Grid container
      sx={{ height: "100vh", textAlign: "center" }}
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Box sx={{ flexDirection: "column", display: "flex", gap: "15px" }}>
        <Typography variant='h5' color="GrayTexts">
          Регистрация
        </Typography>
        <TextField
          label="Псевдоним"
          variant="standard"
          onChange={e => setName(e.target.value)}
        />
        <TextField
          type="email"
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
        <TextField
          type='password'
          label="Пароль еще раз"
          variant="standard"
          onChange={e => setPassword(e.target.value)}
        />
        <Typography color="error">
          {typeError}
        </Typography>
        <Button disabled={disabled} variant="contained" type="submit" onClick={handleClick}>
          Регистрация
        </Button>
        <Button
          variant="outlined"
          type="reset"
          component={Link}
          to="/login"
        >
          Назад
        </Button>
      </Box>
    </Grid>
  )
}

export default Registration