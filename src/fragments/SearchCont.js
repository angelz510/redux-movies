import styled from "styled-components";

export const SearchCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  height: 15%;
  width: 100%;
  background: ${(props) => (props.theme === true ? "#161b22" : "lightgray")};
`;
