import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customnavbar from "./components/Customnavbar";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import UserDashboard from "./components/dashboard/UserDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Customnavbar />
      <div className="container-fluid p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

