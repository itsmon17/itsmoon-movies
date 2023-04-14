import React, { createRef } from "react";
import ButtonMovies from "./button/Button";
import Input from "./Input";
import Modal from "./Modal/Modal";
import styled from "styled-components";

const ButtonCancelAdd = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 640px;
`;

function Modalnput({ onClickModal, onClickMoviesInfo }) {
  const inputMovieName = createRef();
  const inputMovieImageUrl = createRef();
  const inputMovieRating = createRef();

  const onClickMovieNameImageRating = (event) => {
    event.preventDefault(event);

    const moviesData = {
      id:Math.random().toString(),
      name: inputMovieName.current.value,
      url: inputMovieImageUrl.current.value,
      rating: inputMovieRating.current.value,
    };

    onClickMoviesInfo(moviesData);

    onClickModal();
  };

  return (
    <Modal onClickModal={onClickModal}>
      <Input labelText={"Movie Title"} type={"text"} ref={inputMovieName} />
      <Input labelText={"Image URL"} type={"url"} ref={inputMovieImageUrl} />
      <Input labelText={"Your Rating"} type={"number"} ref={inputMovieRating} />
      <ButtonCancelAdd>
        <ButtonMovies
          onClick={onClickModal}
          text={"CANCEL"}
          background={"#3C99DC"}
        />
        <ButtonMovies
          onClick={onClickMovieNameImageRating}
          text={"ADD"}
          background={"blue"}
        />
      </ButtonCancelAdd>
    </Modal>
  );
}

export default Modalnput;
