import axios from "axios";

const API = "https://movie-backend-dt8n.onrender.com/api";


export const getPopularMovies = async () => {
  const res = await axios.get(`${API}/movies/popular`);
  return res.data;
};

export const searchMovies = async (query) => {
  const res = await axios.get(`${API}/search?q=${query}`);
  return res.data;
};

export const getMovieDetails = async (id) => {
  const res = await axios.get(`${API}/movies/${id}`);
  return res.data;
};
