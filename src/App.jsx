import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

function Layout() {
  const location = useLocation();

  // 👇 Hide navbar if route starts with /movie/
  const hideNavbar = location.pathname.startsWith("/movie/");

  return (
    <div style={appContainerStyle}>
      
      {/* Pages */}
      <div style={{ paddingBottom: hideNavbar ? "0px" : "70px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </div>

      {/* 🔥 Bottom Navbar (hidden on detail) */}
      {!hideNavbar && (
        <nav style={bottomNavStyle}>
          <NavLink to="/" style={navItemStyle}>
            <FaHome size={20} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/search" style={navItemStyle}>
            <FaSearch size={20} />
            <span>Search</span>
          </NavLink>
        </nav>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

const appContainerStyle = {
  backgroundColor: "#0f0f1a",
  minHeight: "100vh",
  color: "white",
};

const bottomNavStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  height: "60px",
  backgroundColor: "#111827",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  borderTop: "1px solid #1f2937",
};

const navItemStyle = ({ isActive }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "none",
  color: isActive ? "#facc15" : "#9ca3af",
  fontSize: "12px",
});

