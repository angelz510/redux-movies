import styled from "styled-components";

export const Header = styled.h1`
  margin: 0;
  display: flex;
  justify-content: center;
  color: ${(props) => (props.theme === true ? "whitesmoke" : "#141414")};
`;
