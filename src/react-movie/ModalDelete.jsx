import React from "react";
import ButtonMovies from "./button/Button";
import Modal from "./Modal/Modal";
import styled from "styled-components";

const DeleteNoYes = styled.p`
  color: #282520;
  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
const ButtonNoYes = styled.div`
  display: flex;
`;

const ModalDelete = ({ movies, deleteMoviesModal, id, setMoviesData }) => {
  const deleteFavoriteMovies = () => {
    const filterDelete = movies.filter((movie) => movie.id !== id);
    // console.log(filterDelete);
    setMoviesData(filterDelete);
    deleteMoviesModal()
  };
  return (
    <Modal deleteMoviesModal={deleteMoviesModal}>
      <DeleteNoYes>Are you sure wanna delete?</DeleteNoYes>
      <ButtonNoYes>
        <ButtonMovies
          onClick={deleteMoviesModal}
          background={"orange"}
          text={"NO"}
        />
        <ButtonMovies
          onClick={deleteFavoriteMovies}
          background={"blue"}
          text={"YES"}
        />
      </ButtonNoYes>
    </Modal>
  );
};

export default ModalDelete;
