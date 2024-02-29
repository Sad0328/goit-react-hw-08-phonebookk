import React from 'react';
import { Typography, Box } from '@mui/material';
import { selectAuthIsLogin, selectUser } from '../../redux/auth/auth-slectors';

import { useSelector } from 'react-redux';
import { boxMainStyle } from '../Styled';

const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthIsLogin);
  const user = useSelector(selectUser);

  return (
    
    <Box sx={boxMainStyle}>
      {isLoggedIn ? (
        <>
          <Typography component="h1" variant="h2" color="red" gutterBottom>
            <p
              style={{
                color: '#f656cd',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'centre',
              }}
            >
              HELLO, {user.name}! Welcome to your phonebook.{' '}
            </p>
          </Typography>
        </>
      ) : (
        <>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            <p
              style={{
                color: '#f656cd',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'centre',
              }}
            >
                Hello! This is phonebook.
                Please login or register.
            </p>
          </Typography>
        </>
      )}
    </Box>
    
  );
};

export default HomePage;
