import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import {  FaUser,  } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav>
      <div className="navbar bg-base-100 sm:w-full shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case sm:text-2xl font-semibold text-gray-400">
            Cook's Corner
          </a>
        </div>
        <div className="flex gap-5 items-center">
          <Link className="text-md font-medium" to="/">
            Home
          </Link>
          <Link className="text-md font-medium" to="/blog">
            Blog
          </Link>
          <div className="mr-5 flex items-center">
            {user ? (
              <>
                <FaUser className="text-2xl mx-4"/> <button className="bg-blue-500 px-4 py-2 rounded-md text-white font-medium">Log out</button>{" "}
              </>
            ) : (
              <Link to='/login'><button className="bg-gray-400 px-4 py-2 rounded-md text-white font-medium">Login</button></Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
