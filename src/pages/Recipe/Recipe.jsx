import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ allRecipes }) => {
  const {
    recipes,
    chef_photo,
    chef_name,
    likes,
    number_of_recipes,
    experience,
  } = allRecipes;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mt-8">
        <figure className="w-3/6 h-96">
          <img className="w-full h-full" src={chef_photo} alt="Movie" />
        </figure>
        <div className="card-body w-3/6">
          <h2 className="card-title text-5xl font-semibold">{chef_name}</h2>
          <p className="text-xl font-medium text-gray-500 my-5">
            {recipes[0].description}
          </p>
          <div className="space-y-2">
            <p className="text-gray-400 text-lg font-medium">
              Likes: <span className="text-orange-400">{likes}</span>{" "}
            </p>
            <p className="text-gray-400 text-lg font-medium">
              Total Recipes:{" "}
              <span className="text-orange-400">{number_of_recipes}</span>{" "}
            </p>
            <p className="text-gray-400 text-lg font-medium">
              Experience: <span className="text-orange-400">{experience}</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <Link to="/">
          {" "}
          <button className="btn btn-success">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
