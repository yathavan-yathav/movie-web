import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import { FaArrowLeft } from "react-icons/fa";

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        loadMovie();
    }, [id]);

    const loadMovie = async () => {
        const data = await getMovieDetails(id);
        setMovie(data);
    };

    if (!movie) return null;

    return (
        <div style={{
            background: "#0f0f1a",
            minHeight: "100vh",
            color: "white",
            padding: "20px",
            position: "relative",

        }}
        >

            {/* 🔙 Back Button */}
            <button
                onClick={() => navigate(-1)}
                style={backButtonStyle}
            >
                <FaArrowLeft size={18} />
            </button>

            {/* 🎬 Banner Image */}
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{
                    width: "100%",
                    height: "450px",       // fixed height
                    objectFit: "cover",    // prevents stretching
                    marginBottom: "30px"
                }}
            />
            {/* 📄 Content Section */}
            <div >
                <h1 style={{ marginBottom: "10px" }}>{movie.title}</h1>

                <p style={{ color: "#facc15", marginBottom: "10px" }}>
                    ⭐ {movie.vote_average.toFixed(1)} •{" "}
                    {movie.release_date?.split("-")[0]}
                </p>

                <p style={{ lineHeight: "1.6", color: "#d1d5db" }}>
                    {movie.overview}
                </p>
            </div>
        </div>
    );
}


const backButtonStyle = {
  position: "absolute",
  top: "20px",
  left: "20px",
  zIndex: 10,
  backgroundColor: "rgba(0,0,0,0.6)",
  border: "none",
  color: "white",
  padding: "10px",
  borderRadius: "50%",
  cursor: "pointer",
};
