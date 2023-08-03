import React from 'react'
import { Box, Typography,Container } from '@mui/material'
import logo from './error.gif'

const Page404 = () => {
  return (
    <Container sx={{ color:"text.blue", display: "flex", flexDirection: "column", alignItems:"center", padding:"150px"}}>
        <img src={logo} alt="404" />
    </Container>
  )
}

export default Page404