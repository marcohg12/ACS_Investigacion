import React, { useEffect } from "react";
function Alert(props) {
  const { dismissAlert, content } = props;

  useEffect(() => {
    document.getElementById("content").innerHTML = content;
  }, [content]);

  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      <div id="content"></div>
      <button
        type="button"
        className="btn-close"
        onClick={dismissAlert}
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
