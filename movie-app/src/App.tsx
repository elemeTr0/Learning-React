import { useState, useEffect } from 'react'
import Page from './Page'
import Header from './Header'
import './App.css'

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  backdrop_path: string
}

function App() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesTop, setMoviesTop] = useState<Movie[]>([]);

  useEffect(() => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    };

    fetch("https://api.themoviedb.org/3/movie/popular", options)
      .then(res => res.json())
      .then(data => setMovies(data.results));

    fetch("https://api.themoviedb.org/3/movie/top_rated", options)
      .then(result => result.json())
      .then(dataUpcoming => setMoviesTop(dataUpcoming.results));

  }, []);

  console.log(moviesTop)

  const [active, setActive] = useState(-1)

  function selectMovie(selectedMovie: number){
    setActive(selectedMovie)
  }

  return (
    <>
    <Header movies={movies} selectedMovie={active}/>
    <Page movies={movies} selectMovie={selectMovie} title={"Popular"}/>
    <Page movies={moviesTop} selectMovie={selectMovie} title={"Top Rated"}/>
    </>
  )
}

export default App