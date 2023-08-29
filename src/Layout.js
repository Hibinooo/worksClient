import React, { Component } from 'react';
import { Box, Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Navigation from './components/navigationComponents/Navigation';
import Header from './components/Header';
const Layout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }} >

        {/* <Toolbar /> */}
        {children}
      {/* <Navigation /> */}
    </Box>
  );
};

export default Layout;
