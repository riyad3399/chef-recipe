import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { chef_photo, experience, chef_name, number_of_recipes, likes, id } =
    chef;

  return (
    <div className="my-5">
      <div
        className="card sm:w-full  shadow-xl bg-gray-100 duration-300 hover:-translate-y-6 bg-background

hover:scale-95 hover:border border-orange-200 "
      >
        <figure className="px-8 pt-8">
          <LazyLoad>
            <img
              src={chef_photo}
              alt="Shoes"
              className="rounded-xl h-72 w-full"
            />
          </LazyLoad>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-gray-50 my-5">
            {chef_name}
          </h2>
          <p className="text-lg font-medium text-gray-100">
            Experience: <span className="text-orange-200">{experience}</span>
          </p>
          <p className="text-lg font-medium text-gray-100">
            Recepies:{" "}
            <span className="text-orange-200">{number_of_recipes}</span>
          </p>
          <div className="flex justify-between items-center gap-5">
            <div>
              <p className="text-lg font-medium text-gray-100 flex gap-2 items-center">
                Likes: <FaThumbsUp className="text-blue-400" />{" "}
                <span className="text-orange-200">{likes}</span>
              </p>
            </div>
            <div className="card-actions">
              <Link to={`/viewrecipes/${id}`}>
                <button className="btn btn-info animate-pulse duration-500">
                  View Recipes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
