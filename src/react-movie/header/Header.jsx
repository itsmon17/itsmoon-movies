import ButtonMovies from "../button/Button";
import styled from "styled-components";
import { useState } from "react";
import Modalnput from "../Modalnput";

const HeaderMovieDiv = styled.div`
  background-color: blue;
  top: 0;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextFavoriteMovies = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #ffffff;
  font-size: 2rem;
  margin-left: 30px;
`;

const HeaderMovie = ({ infoMovies }) => {
  const [modal, useModal] = useState(false);

  const OnClickModal = () => {
    useModal((prevState) => !prevState);
  };

  return (
    <>
      {modal ? (
        <Modalnput onClickMoviesInfo={infoMovies} onClickModal={OnClickModal} />
      ) : null}
      <HeaderMovieDiv>
        <TextFavoriteMovies>Favorite Movies</TextFavoriteMovies>
        <ButtonMovies
          onClick={OnClickModal}
          text="Add Movie"
          background="orange"
        />
      </HeaderMovieDiv>
    </>
  );
};
export default HeaderMovie;
