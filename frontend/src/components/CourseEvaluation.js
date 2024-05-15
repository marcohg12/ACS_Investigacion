import React, { useState, useEffect } from "react";
import axios from "axios";
import EvalCreation from "./EvalCreation";
import Alert from "./Alert";

function CourseEvaluation(props) {
  const { courseId, role } = props;
  const [evals, setEvals] = useState([]);
  const [evalCreateComponent, setEvalCreateComponent] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState(null);

  const dismissAlert = () => {
    setShowAlert(false);
  };

  const showAlertWithContent = (content) => {
    setAlertContent(content);
    setShowAlert(true);
  };

  const getEvals = async () => {
    const response = await axios.get(
      "http://localhost:4000/course/evals/" + courseId
    );

    if (response.data.error === false) {
      setEvals(response.data.data.evals);
    }
  };

  useEffect(() => {
    getEvals();
  }, [courseId]);

  const cancelCreation = () => {
    setEvalCreateComponent(null);
  };

  const showEvalCreate = () => {
    if (evalCreateComponent) {
      return;
    }

    const component = (
      <EvalCreation
        cancel={() => {
          cancelCreation();
        }}
        courseId={courseId}
        showAlert={(content) => {
          showAlertWithContent(content);
        }}
        refresh={() => {
          getEvals();
        }}
      ></EvalCreation>
    );
    setEvalCreateComponent(component);
  };

  return (
    <>
      {role === "PROFESSOR" ? (
        <>
          {showAlert ? (
            <Alert
              dismissAlert={() => {
                dismissAlert();
              }}
              content={alertContent}
            ></Alert>
          ) : (
            <></>
          )}
          <button
            className="btn btn-secondary mb-4"
            style={{ width: "150px" }}
            onClick={() => {
              showEvalCreate();
            }}
          >
            Crear Evaluación
          </button>
          {evalCreateComponent ? evalCreateComponent : <></>}
        </>
      ) : (
        <></>
      )}
      <ul className="list-group">
        {evals.map((evaluation) => {
          return <li className="list-group-item">{evaluation.evalName}</li>;
        })}
      </ul>
    </>
  );
}

export default CourseEvaluation;
