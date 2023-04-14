import React, { useState } from "react";
import ButtonMovies from "../button/Button";
import styled from "styled-components";
import ModalDelete from "../ModalDelete";

const Container = styled.div`
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 20%;
  background-color: rgb(248, 255, 253);
  width: 900px;
  height: 200px;
  display: flex;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  &:hover {
    background: linear-gradient(90deg, #15159ec1, #86156ebe, #931b1ba6);
  }
`;
const Image = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 10px;
`;
const MovieTitle = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  margin-left: 40px;
`;
const MovieStar = styled.h3`
  color: rgb(255, 255, 255);
  border-radius: 10px;
  text-align: center;
  padding: 5px 3px 5px 3px;
  background-color: coral;
  width: 100px;
  height: 30px;
  margin-right: 10px;
`;
const FilmInfoDiv = styled.div`
  margin-top: 50px;
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -10px;
`;


function MainMovies({ movies,id, img, name, rating, setMoviesData }) {
  const [modal, useModalDelete] = useState(false);

  const DeleteMoviesModal = () => {
    useModalDelete((prevState) => !prevState);
  };
  return (
    <>
      {modal ? (
        <ModalDelete
          movies={movies}
          id={id}
          deleteMoviesModal={DeleteMoviesModal}
          setMoviesData={setMoviesData}
        />
      ) : null}
      <Container>
        <Image className="img-mov" src={img} alt="" />
        <MovieTitle>{name}</MovieTitle>
        <FilmInfoDiv>
          <MovieStar>{rating}/5 STARS</MovieStar>
          <ButtonMovies
            onClick={DeleteMoviesModal}
            text="DELETE"
            background="red"
          />
        </FilmInfoDiv>
      </Container>
    </>
  );
}

export default MainMovies;