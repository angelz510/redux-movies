import styled from "styled-components";

export const SearchBtn = styled.button`
  outline: none;
  background: ${(props) => (props.theme === true ? "#fa7a18" : "#0969da")};
  color: ${(props) => (props.theme === true ? "#010409" : "whitesmoke")};
  border: none;
  cursor: pointer;
  font-size: 25px;
  height: 3.5rem;
  margin-left: 0.5rem;
  border-radius: 5px;

  &:hover {
    filter: brightness(85%);
  }
`;
