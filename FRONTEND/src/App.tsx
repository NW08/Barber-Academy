import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Courses from "./pages/Courses.tsx";
import About from "./pages/About";
import Barber from "./pages/Barber";
import Signup from "./pages/SignUp";
import Forgot from "./pages/Forgot.tsx";
import VerifyCode from "./pages/VerifyCode.tsx";
import ForgotChange from "./pages/Change.tsx";
import Community from "./pages/Community.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Payments from "./pages/Payments.tsx";
import ConfirmAccount from "./pages/ConfirmMail.tsx";

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
      <Route path="/recuperar" element={<Forgot />} />
      <Route path="/validation" element={<VerifyCode />} />
      <Route path="/change" element={<ForgotChange />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payments />} />
      <Route path="/confirmar-cuenta/:token" element={<ConfirmAccount />} />
    </Routes>
  );
}

export default App;
