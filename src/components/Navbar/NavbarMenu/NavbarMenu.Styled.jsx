import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
  color: #56eef6;
  &.active {
    color: #f656cd;
    list-style-type: none;
  }
`;

export const navbarStyle = {
  display: 'flex',
  columnGap: 2,
};
