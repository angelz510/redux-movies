import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 20%;
  background: ${(props) => (props.theme === true ? "#141414" : "white")};
  box-shadow: 0 3px 10px 0 ${(props) => (props.theme === true ? "black" : "#aaa")};
  border-radius: 3px;
  margin: 1rem;
`;

const Title = styled.h3`
  text-align: center;
  margin: 0;
  color: ${(props) => (props.theme === true ? "whitesmoke" : "#010409")};
`;

const Img = styled.img`
  object-fit: cover;
  margin: 1rem;
`;

const Year = styled.h4`
  margin: 0;
`;

const Plot = styled.div`
  color: ${(props) => (props.theme === true ? "whitesmoke" : "#010409")};
`;

const MovieCard = (props) => {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      <Card theme={theme}>
        <Img src={props.img} />
        <Title theme={theme}>{props.title}</Title>
        <Year theme={theme}>{props.year}</Year>
        <Plot theme={theme}>{props.plot}</Plot>
      </Card>
      <br />
    </>
  );
};

export default MovieCard;
