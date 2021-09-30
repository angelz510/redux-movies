import styled from "styled-components";

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  color: ${(props) => (props.theme === true ? "#c9d1d9" : "#010409")};
`;
