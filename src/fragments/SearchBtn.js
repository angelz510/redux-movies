import styled from "styled-components";

export const SearchBtn = styled.button`
  outline: none;
  background: ${(props) => (props.theme === true ? "black" : "lightgray")};
  color: ${(props) => (props.theme === true ? "lightgray" : "black")};
  border: none;
  cursor: pointer;
  font-size: 25px;
  height: 3.5rem;
  margin: 1rem;
  border-radius: 5px;
`;
