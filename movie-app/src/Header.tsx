import { useState, useEffect } from 'react'

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  backdrop_path: string
}

interface HeaderProps {
  movies: Movie[];
  selectedMovie: number;
}

export default function Header({ movies, selectedMovie }: HeaderProps) {
  const [active, setActive] = useState(0);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (selectedMovie !== -1) {
      setActive(selectedMovie);
      setBool(true);
    }
  }, [selectedMovie]);

  useEffect(() => {
    if (movies.length === 0 || bool) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setActive(randomIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies.length, bool]);

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  const year = movies[active].release_date.split('-');

  return (
    <div className="headerDiv">
      <div className="headerDesc">
        <h1>{movies[active].title}</h1>
        <p>{year[0]}</p>
        <p>{movies[active].overview}</p>
      </div>

      <img
        src={`https://image.tmdb.org/t/p/w500${movies[active].backdrop_path}`}
      />
    </div>
  );
}