import styled from "styled-components";

export const AppCont = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => (props.theme === true ? "black" : "white")};
  color: ${(props) => (props.theme === true ? "whitesmoke" : "black")};
`;
