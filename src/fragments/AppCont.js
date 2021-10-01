import styled from "styled-components";

export const AppCont = styled.div`
  height: 100vh;
  width: 100%;

  background: ${(props) => (props.theme === true ? "#141414" : "white")};
  color: ${(props) => (props.theme === true ? "whitesmoke" : "#010409")};
`;
