import MainMovies from "../main-movies/MainMovies";

const MainMovie = ({ movies, setMoviesData }) => {

  return movies.map((elem) => {
    return (
      <MainMovies
        setMoviesData={setMoviesData}
        movies={movies}
        id={elem.id}
        name={elem.name}
        rating={elem.rating}
        img={elem.url}
      />
    );
  });
};

export default MainMovie;
