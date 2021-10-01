import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 50%;

  background: ${(props) => (props.theme === true ? "#010409" : "#c9d1d9")};
`;

const Title = styled.h2`
  margin: 0;
  color: ${(props) => (props.theme === true ? "whitesmoke" : "#010409")};
`;

const Img = styled.img``;

const Year = styled.h4`
  margin: 0;
`;

const MovieCard = (props) => {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <Card theme={theme}>
        <Title theme={theme}>{props.title}</Title>
        <Img src={props.img} />
        <Year theme={theme}>{props.year}</Year>
      </Card>
      <br />
    </>
  );
};

export default MovieCard;
