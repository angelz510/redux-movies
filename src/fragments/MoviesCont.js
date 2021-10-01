import styled from "styled-components";

export const MoviesCont = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: row nowrap;
  padding-top: 3rem;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }

  background: ${(props) => (props.theme === true ? "#141414" : "white")};
  color: ${(props) => (props.theme === true ? "whitesmoke" : "#010409")};
`;
