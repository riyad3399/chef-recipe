import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav>
      <div className="navbar bg-base-100 sm:w-full shadow-md">
        <div className="flex-1 text-orange-400">
          <a className="sm:btn sm:btn-ghost normal-case sm:text-2xl font-bold  animate-pulse duration-300">
            Cook's Corner
          </a>
        </div>
        <div className="flex gap-5 items-center">
          <Link className="sm:text-md font-medium" to="/">
            Home
          </Link>
          <Link className="sm:text-md font-medium" to="/blog">
            Blog
          </Link>
          <div className="mr-5 flex items-center">
            {user ? (
              <>
                {user.photoURL ? (
                  <img className="h-10 rounded-full mr-2" src={user.photoURL} alt="" />
                ) : (
                  <FaUser className="text-2xl mx-4" />
                )}
                <button
                  onClick={handleLogout}
                  className="bg-gray-400 duration-300 hover:bg-gray-500 px-4 py-2 rounded-md text-white font-medium"
                >
                  Log out
                </button>{" "}
              </>
            ) : (
              <Link to="/login">
                <button className="bg-blue-400 hover:bg-blue-500 duration-300 px-4 py-2 rounded-md text-white font-medium">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
