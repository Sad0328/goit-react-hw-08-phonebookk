import React from 'react';
import { selectUser } from '../../../redux/auth/auth-slectors';
import { logout } from '../../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Toolbar } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const NavbarUser = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 3, fontSize: 17 }}>
      Welcome, {name}!
      <Button
        variant="text"
        color="inherit"
        type="button"
        startIcon={<ExitToAppIcon />}
        onClick={onLogout}
      >
        Log Out
      </Button>
    </Toolbar>
  );
};

export default NavbarUser;
