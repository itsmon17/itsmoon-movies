import styled from "styled-components";

const ButtonStyle = styled.button`
  color: rgb(255, 255, 255);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 70px;
  height: 40px;
  border-style: none;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  background: rgb(145, 92, 182);
  border-radius: 4px;
  margin-right: 20px;
  font-weight: normal;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #5f3232;
    box-shadow: 0 5px 30px rgba(4, 4, 5, 0.4);
  }
`;
const ButtonMovies = ({ onClick, background, text }) => {
  return (
    <ButtonStyle
      onClick={onClick}
      className="button"
      style={{ backgroundColor: `${background}` }}
    >
      {text}
    </ButtonStyle>
  );
};

export default ButtonMovies;
