import styled from "styled-components";

export const AppCont = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  height: 100vh;
  width: 100%;

  background: ${(props) => (props.theme === true ? "#010409" : "#c9d1d9")};
  color: ${(props) => (props.theme === true ? "#c9d1d9" : "#010409")};
`;
