import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #4a5568;
  padding: 16px 32px;
  border-radius: 4px;
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

const NavLink1 = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.2s;


  &:hover,
  &.active {
    color: #90cdf4;
  }
`;


function NavBar() {
  return (
    <>
      <Nav>
        <NavLink1 to="/">Home</NavLink1>
        <NavLink1 to="/gallery">Gallery</NavLink1>
        <NavLink1 to="/about">About</NavLink1>
      </Nav>
    </>
  )
}

export default NavBar;



