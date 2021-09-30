import styled from "styled-components";

export const SearchInp = styled.input`
  height: 3.5rem;
  width: 40%;
  outline: none;
  border: none;
  border-bottom: ${(props) => (props.theme === true ? "2px solid #c9d1d9" : "2px solid #010409")};
  font-size: 25px;

  background: ${(props) => (props.theme === true ? "#010409" : "#c9d1d9")};
  color: ${(props) => (props.theme === true ? "#c9d1d9" : "#010409")};
`;
