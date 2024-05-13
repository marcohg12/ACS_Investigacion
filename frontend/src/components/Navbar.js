import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#508bfc" }}
    >
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-3 mb-lg-3">
            <li className="nav-item me-4 mt-3">
              <Link to="/home" className="nav-link text-white">
                Menú principal
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <Link to="/home" className="nav-link text-white me-4">
            Mi perfil
          </Link>
          <button onClick={logout} className="nav-link text-white ms-2">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
