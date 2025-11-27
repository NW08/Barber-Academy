import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import Community from "./pages/Community";
import About from "./pages/About";
import Barber from "./pages/Barber";
import Signup from "./pages/SignUp";

function App() {
  return (
    <Routes>
      {/* Todas estas rutas comparten Header y Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/barber" element={<Barber />} />
      </Route>

      {/* Rutas SIN Header/Footer */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
