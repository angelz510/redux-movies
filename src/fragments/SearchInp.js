import styled from "styled-components";

export const SearchInp = styled.input`
  height: 3.5rem;
  width: 40%;
  outline: none;
  border: none;
  border-bottom: ${(props) => (props.theme === true ? "2px solid white" : "2px solid black")};
  font-size: 25px;

  background: ${(props) => (props.theme === true ? "black" : "white")};
  color: ${(props) => (props.theme === true ? "whitesmoke" : "black")};
`;
