import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const data = await getPopularMovies();
    setMovies(data);
  };

  return (
    <div style={gridStyle}>
      {movies.map((movie) => (
        <div
          key={movie.id}
          style={cardStyle}
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            style={{ width: "100%", borderRadius: "12px" }}
          />
          <h4>{movie.title}</h4>
          <p style={{ color: "#facc15" }}>
            ⭐ {movie.vote_average.toFixed(1)} • {movie.release_date?.split("-")[0]}
          </p>
        </div>
      ))}
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "20px",
  padding: "20px",
};

const cardStyle = {
  cursor: "pointer",
};
