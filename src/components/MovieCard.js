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

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;

const Title = styled.h3`
  text-align: center;
  margin: 0rem;
  color: ${(props) => (props.theme === true ? "whitesmoke" : "#010409")};
`;

const Img = styled.img`
  object-fit: cover;
  margin: 0.5rem;
`;

const Year = styled.h4`
  margin-bottom: 0.5rem;
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
