import styled from "styled-components";

export const SearchBtn = styled.button`
  outline: none;
  background: ${(props) => (props.theme === true ? "#fa7a18" : "#0969da")};
  color: ${(props) => (props.theme === true ? "#010409" : "#c9d1d9")};
  border: none;
  cursor: pointer;
  font-size: 25px;
  height: 3.5rem;
  margin: 1rem;
  border-radius: 5px;
`;
