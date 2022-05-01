import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  // const currentUser = { displayName: "felix" };
  const navigate = useNavigate();
  const logOutHandler = () => {
    logOut();
    toast.success("Succesfully logged out");
  };
  const currentUser = useContext(AuthContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            React Movie App
          </Link>
          <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>
            ) : (
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}

            {currentUser ? (
              <button
                className="ms-2 btn btn-outline-light"
                onClick={logOutHandler}
              >
                Logout
              </button>
            ) : (
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
