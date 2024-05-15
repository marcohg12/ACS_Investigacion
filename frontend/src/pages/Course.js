import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../components/AuthContext";
import { Navigate } from "react-router-dom";
import CourseDashboard from "../components/CourseDashboard";

function Course(props) {
  const { token, loading } = useContext(AuthContext);
  const { role } = props;

  if (loading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <section>
      <Navbar></Navbar>
      <section className="mb-4 mt-4">
        <div className="container">
          <CourseDashboard role={role}></CourseDashboard>
        </div>
      </section>
    </section>
  );
}

export default Course;
