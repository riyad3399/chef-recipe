import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { signIn, loginWithGoogle } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        toast.success("Login successful", { theme: "dark", autoClose: 2000 });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-8">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <p className="text-center  text-red-500  flex font-medium items-center gap-1">
                {error}
              </p>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <p>
                  Cook's Corner new? Go{" "}
                  <Link className="text-blue-500 underline" to="/register">
                    Register
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-3">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <span className="border-y-2"></span>
            <div className="mt-4">
              <button type="button" onClick={handleGoogleLogin} className="btn btn-outline btn-primary w-full mb-2">
                <FaGoogle className="mr-2" /> Google Login
              </button>
              <button type="button" className="btn btn-outline w-full">
                <FaGithub className="mr-2" /> Github Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
