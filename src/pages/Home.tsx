import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile } from "../api";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getProfile(token).then((data) => {
        if (data.user) {
          setUser(data.user);
        }
      });
    }
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 px-3 text-center">
      <h1 className="mb-3">Welcome 👋</h1>

      {user ? (
        <>
          <p className="mb-4">Logged in as: {user.email}</p>

          <button
            className="btn btn-danger"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">This is your home page</p>

          <div
            className="d-flex flex-column flex-sm-row gap-2 w-100"
            style={{ maxWidth: "300px" }}
          >
            <Link to="/login" className="btn btn-primary w-100">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline-primary w-100">
              Register
            </Link>
          </div>
        </>
      )}
    </div>
  );
}