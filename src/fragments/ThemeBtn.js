import styled from "styled-components";

export const ThemeBtn = styled.button`
  outline: none;
  background: ${(props) => (props.theme === true ? "#c9d1d9" : "#141414")};
  color: ${(props) => (props.theme === true ? "010409" : "#c9d1d9")};
  border: none;
  cursor: pointer;
  font-size: 25px;
  height: 3.5rem;
  margin: 1rem;
  border-radius: 5px;
`;
