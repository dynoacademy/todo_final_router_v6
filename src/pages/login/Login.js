import NavBar from "../NavBar";

import { FaRegEye } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>
            You are already logged in!{" "}
            <b
              onClick={() => {
                localStorage.removeItem("loggedIn");
                navigate("/");
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              Logout
            </b>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                alert("You are successfully logged in!");
                navigate("/", { replace: true });
                localStorage.setItem("loggedIn", true);
              }}
            >
              Login!
            </button>
            <br />
            <br />
            <Link to="/login/showInfo">Nested Route | Show Info</Link>
            <br /> <br />
            <br />
            {/* Nested routing */}
            <Routes>
              <Route
                path="/showInfo"
                element={
                  <div>
                    This is dummy login and doesnot communicate with server.
                  </div>
                }
              />
            </Routes>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
