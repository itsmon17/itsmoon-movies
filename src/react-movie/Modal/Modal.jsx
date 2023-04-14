import styled from "styled-components";
import { createPortal } from "react-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-style: solid;
  width: 60vw;
  height: 40vh;
  border-radius: 10px;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

const BackdropStyle = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;

const BackdropContainer = styled.div`
  position: fixed;
`;

function Modal({ onClickModal, children }) {
  return (
    <>
      {createPortal(
        <BackdropContainer>
          <BackdropStyle onClick={onClickModal} />
          <Container>{children}</Container>
        </BackdropContainer>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
