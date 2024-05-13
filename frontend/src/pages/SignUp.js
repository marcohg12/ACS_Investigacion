import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
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
                <h3 className="mb-5">Crear Cuenta</h3>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    id="typeTextX-2"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Nombre Completo</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Correo Electrónico</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Contraseña</label>
                </div>

                <div className="d-flex mb-4">
                  <label className="me-2">¿Ya tiene una cuenta?</label>
                  <Link to="/">Iniciar Sesión</Link>
                </div>

                <button
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
