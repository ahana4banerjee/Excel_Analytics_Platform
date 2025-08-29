import { useState } from "react";
import Customnavbar from "./components/Customnavbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  // page state: "home" | "login" | "signup"
  const [page, setPage] = useState("home");

  return (
    <>
      {/* Navbar with buttons to switch pages */}
      <Customnavbar
        onLoginClick={() => setPage("login")}
        onSignUpClick={() => setPage("signup")}
        onHomeClick={() => setPage("home")}
      />

      <div className="container-fluid p-0">
        {page === "home" && <Home />}
        {page === "login" && <Login onSignUpLinkClick={() => setPage("signup")} />}
        {page === "signup" && <SignUp />}
      </div>
    </>
  );
}

export default App;
