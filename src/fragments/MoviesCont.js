import styled from "styled-components";

export const MoviesCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => (props.theme === true ? "#010409" : "#c9d1d9")};
  color: ${(props) => (props.theme === true ? "whitesmoke" : "#010409")};
`;
