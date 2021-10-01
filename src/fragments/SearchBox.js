import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background: ${(props) => (props.theme === true ? "#161b22" : "lightgray")};
  color: ${(props) => (props.theme === true ? "whitesmoke" : "#010409")};
`;
