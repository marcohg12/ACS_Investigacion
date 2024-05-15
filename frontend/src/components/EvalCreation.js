import React, { useState } from "react";
import axios from "axios";

function EvalCreation(props) {
  const { cancel, courseId, showAlert, refresh } = props;
  const [evalName, setEvalName] = useState(null);
  const [evalDescription, setEvalDescription] = useState(null);
  const [evalDeadline, setEvalDeadline] = useState(null);

  const sendForm = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:4000/course/evals", {
      courseId: courseId,
      name: evalName,
      description: evalDescription,
      deadline: evalDeadline,
    });

    if (response.data.error) {
      alert(response.data.message);
    } else {
      const componentMessage =
        "Evaluación " + evalName + " creada exitosamente";
      showAlert(componentMessage);
      cancel();
      refresh();
    }
  };

  return (
    <form onSubmit={sendForm}>
      <div className="row g-3 mb-4">
        <div className="col-auto">
          <label className="col-form-label">Nombre</label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputText1"
            className="form-control"
            onChange={(e) => setEvalName(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-auto">Descripción</div>
        <div className="col-auto">
          <textarea
            type="text"
            id="inputText2"
            className="form-control"
            onChange={(e) => setEvalDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="col-auto">Fecha de Entrega</div>
        <div className="col-auto">
          <input
            type="date"
            id="inputDate1"
            className="form-control"
            onChange={(e) => setEvalDeadline(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-auto">
          <button className="btn btn-info" type="submit">
            Crear
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary" onClick={cancel}>
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}

export default EvalCreation;
