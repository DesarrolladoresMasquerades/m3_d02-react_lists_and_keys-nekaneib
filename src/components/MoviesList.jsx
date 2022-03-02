import movies from "../movieData.json";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MoviesList() {
  const [moviesLIst, setMoviesList] = useState(movies);

  
  function deleteMovieById(id){
      /** This filter copies all movies that are not being delete */
    setMoviesList(moviesLIst.filter(movie => movie._id !== id))
  }


  return (
    <div>
      <h1>Movies form the json file</h1>
      {moviesLIst.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          deleteMovieById={deleteMovieById}
        />
      ))}
    </div>
  );
}
