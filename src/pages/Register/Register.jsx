import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    form.reset();
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        
        setError("");
        toast.success("Register successful", {
          theme: "dark",
          autoClose: 2000,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold mt-5">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <p className="text-center text-red-500 p-2 flex font-medium items-center gap-1">
            <span>{error}</span>
          </p>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
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
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo URL"
                className="input input-bordered"
              />
              <label className="label">
                <p>
                  You Have Already Account?{" "}
                  <Link className="text-blue-500 underline" to="/login">
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div>
              <input onClick={handleAccept} className="mr-2" type="checkbox" name="accept" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <div className="form-control mt-2">
              <input
                disabled={!accept}
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
