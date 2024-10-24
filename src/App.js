import React from "react";
import { useSelector } from "react-redux";
import AddFilm from "./components/AddFilm";
import FilmItem from "./components/FilmItem";
import FilmList from "./components/FilmList";

function App() {
  const films = useSelector((state) => state.films.films)
  return (
    <div className="App">
      <AddFilm/>
      <h1>Любимые фильмы!</h1>
      <FilmList>
        {films.map((el) => (
          <FilmItem film={el} key={el.id}/>
        ))}
      </FilmList>
    </div>
  );
}

export default App;
