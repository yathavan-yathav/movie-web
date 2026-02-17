import { useState } from "react";
import { searchMovies } from "../services/api";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (query.trim()) {
      const data = await searchMovies(query);
      setMovies(data);
    }
  };

  return (
    <div style={{ padding: "20px", background: "#0f0f1a", minHeight: "100vh" }}>
      
      {/* 🔍 Search Bar */}
      <div style={searchContainerStyle}>
        <input
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={inputStyle}
        />
        <FaSearch
          onClick={handleSearch}
          style={iconStyle}
        />
      </div>

      {/* 🎬 Movie Grid */}
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
              alt={movie.title}
            />
            <h4 style={{ color: "white", marginTop: "8px" }}>
              {movie.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

const searchContainerStyle = {
  position: "relative",
  width: "100%",
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 40px 12px 15px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  backgroundColor: "#1f2937",
  color: "white",
  fontSize: "14px",
};

const iconStyle = {
  position: "absolute",
  right: "15px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#facc15",
  cursor: "pointer",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  cursor: "pointer",
};
