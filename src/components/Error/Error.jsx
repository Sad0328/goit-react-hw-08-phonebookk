import React from 'react';
import { selectError } from '../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { ErrorStyle } from './Error.styled';

export const Error = () => {
  const error = useSelector(selectError);
  return (
    <Box sx={ErrorStyle}>
      <Typography color="#f656cd" component="h2" variant="h3">
        Sorry, error: {error}
      </Typography>
    </Box>
  );
};
