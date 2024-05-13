import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../components/AuthContext";
import { Navigate } from "react-router-dom";
import StudentDashboard from "../components/StudentDashboard";
import ProfessorDashboard from "../components/ProfessorDashboard";

function Home() {
  const { token, loading, user } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/" replace />;
  }

  let dashboard;

  if (user.userRole === "STUDENT") {
    dashboard = <StudentDashboard></StudentDashboard>;
  } else if (user.userRole === "PROFESSOR") {
    dashboard = <ProfessorDashboard></ProfessorDashboard>;
  }

  return (
    <section>
      <Navbar></Navbar>
      <section className="mb-4 mt-4">
        <div className="container">{dashboard}</div>
      </section>
    </section>
  );
}

export default Home;
