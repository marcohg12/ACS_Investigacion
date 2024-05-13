import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../components/AuthContext.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const sendForm = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:4000/user/login", {
      email: email,
      password: password,
    });

    if (response.data.error) {
      alert(response.data.message);
    } else {
      setToken(response.data.data.token);
      setUser(response.data.data.user);
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      navigate("/home");
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">Iniciar Sesión</h3>

                <form onSubmit={sendForm}>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label className="form-label">Correo Electrónico</label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label className="form-label">Contraseña</label>
                  </div>

                  <div className="d-flex mb-4">
                    <label className="me-2">¿No está registrado?</label>
                    <Link to="/signup">Registrarse</Link>
                  </div>

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
