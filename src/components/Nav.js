import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const NavContainer = styled.div`
  background: ${(props) => (props.theme === true ? "#010409" : "#c9d1d9")};
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  position: sticky;
`;

const NavText = styled.div`
  color: ${(props) => (props.theme === true ? "#c9d1d9" : "black")};
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;
  text-decoration: none;
`;

const Nav = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <NavContainer theme={theme}>
      <NavText theme={theme}>Home</NavText>
      <NavText theme={theme}>Watchlist</NavText>
    </NavContainer>
  );
};

export default Nav;
