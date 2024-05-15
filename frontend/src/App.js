import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Course from "./pages/Course";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/professor/course/:courseId"
            element={<Course role="PROFESSOR" />}
          />
          <Route
            path="/student/course/:courseId"
            element={<Course role="STUDENT" />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
