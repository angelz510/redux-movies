import styled from "styled-components";

export const SearchInp = styled.input`
  outline: none;
  border: none;
  border-bottom: ${(props) => (props.theme === true ? "2px solid #c9d1d9" : "2px solid #010409")};
  font-size: 25px;
  background: ${(props) => (props.theme === true ? "#161b22" : "lightgray")};
  color: ${(props) => (props.theme === true ? "#c9d1d9" : "#010409")};
`;
