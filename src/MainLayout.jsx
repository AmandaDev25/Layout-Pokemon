import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export default function MainLayout() {
  return (
    <Container
      maxWidth='lg'
    >
      <Box height='96vh'>
        <AppBar position="sticky" color='error'>
          <Toolbar>
            <Box
              variant="h6"
              component="div"
            >
              <img src="./public/assets/logo.png" height={70} />
            </Box>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    </Container>
  );
}