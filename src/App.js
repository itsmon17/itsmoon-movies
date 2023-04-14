import { useState } from "react";
import "./App.css";
import HeaderMovie from "./react-movie/header/Header";
import MainMovie from "./react-movie/Maincontent/Main";

function App() {
  const [moviesData, setMoviesData] = useState([]);

  const moviesInfo = (data) => {
    const updateMovies = [...moviesData];
    updateMovies.push(data);
    setMoviesData(updateMovies);
    console.log(data);
  };
  return (
    <div className="App">
      <HeaderMovie infoMovies={moviesInfo} setMoviesData={setMoviesData} />
      <MainMovie movies={moviesData} setMoviesData={setMoviesData} />
    </div>
  );
}

export default App;
