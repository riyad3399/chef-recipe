import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaThumbsUp, FaHeart, FaArrowLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";

const ViewRecipes = () => {
  const allRecipes = useLoaderData();

  const {
    recipes,
    chef_photo,
    chef_name,
    likes,
    number_of_recipes,
    experience,
  } = allRecipes;

  const handleFavorite = () => {
    return toast.success("Add to Favorite", { theme: "dark", autoClose: 2000 });
  };

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mt-8 w-full">
        <figure className="w-3/6 h-96">
          <img className="w-full h-full" src={chef_photo} alt="Movie" />
        </figure>
        <div className="card-body w-3/6">
          <h2 className="card-title text-5xl font-semibold">{chef_name}</h2>
          <p className="text-xl font-medium text-gray-500 my-5">
            {recipes[0].description}
          </p>
          <div className="space-y-2 sm:flex  items-center justify-between">
            <p className="text-gray-400 text-lg font-medium flex items-center gap-1">
              <FaThumbsUp className="text-blue-500" /> Likes:{" "}
              <span className="text-orange-400">{likes}</span>{" "}
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
      <div className="mt-24 bg-blue-200 p-8 border border-orange-200 rounded-md">
        <h1 className="text-center text-4xl my-8 font-semibold">
          Recipes Items
        </h1>
        <div className="grid md:grid-cols-3 gap-5 w-4/5 mx-auto">
          <div
            className="card card-compact w-full bg-base-100 shadow-xl duration-300 hover:-translate-y-6

hover:scale-95

"
          >
            <figure>
              <img
                className="h-44 w-full"
                src={recipes[0].recipe_photo}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipes[0].name}</h2>
              <p>{recipes[0].description}</p>
              <div>
                <p className="text-base text-gray-400 flex gap-2">
                  Like: <FaThumbsUp className="text-blue-500" />{" "}
                  <span className="text-orange-400"> {likes}</span>
                </p>
                <p className="text-base text-gray-400">
                  Recipes:{" "}
                  <span className="text-orange-400">{number_of_recipes}</span>{" "}
                </p>
                <p className="text-base text-gray-400 flex gap-2">
                  Reting:{" "}
                  <span className="text-orange-400">{recipes[0].rating}</span>{" "}
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={Math.round(recipes[0]?.rating)}
                    readOnly
                  />{" "}
                </p>
              </div>
              <div className="card-actions justify-end">
                <span onClick={handleFavorite}>
                  {" "}
                  <FaHeart
                    className="text-red-400 cursor-pointer"
                    style={{ fontSize: "30px" }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            className="card card-compact w-full bg-base-100 shadow-xl duration-300 hover:-translate-y-6

hover:scale-95"
          >
            <figure>
              <img
                className="h-44 w-full"
                src={recipes[1].recipe_photo}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipes[1].name}</h2>
              <p>{recipes[1].description}</p>
              <div>
                <p className="text-base text-gray-400 flex gap-2">
                  Like: <FaThumbsUp className="text-blue-500" />{" "}
                  <span className="text-orange-400"> {likes}</span>
                </p>
                <p className="text-base text-gray-400">
                  Recipes:{" "}
                  <span className="text-orange-400">{number_of_recipes}</span>{" "}
                </p>
                <p className="text-base text-gray-400 flex gap-2">
                  Reting:{" "}
                  <span className="text-orange-400">{recipes[1].rating}</span>{" "}
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={Math.round(recipes[1]?.rating)}
                    readOnly
                  />{" "}
                </p>
              </div>
              <div className="card-actions justify-end">
                <span onClick={handleFavorite}>
                  {" "}
                  <FaHeart
                    className="text-red-400 cursor-pointer"
                    style={{ fontSize: "30px" }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div
            className="card card-compact w-full bg-base-100 shadow-xl duration-300 hover:-translate-y-6

hover:scale-95"
          >
            <figure>
              <img
                className="h-44 w-full"
                src={recipes[2].recipe_photo}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipes[2].name}</h2>
              <p>{recipes[2].description}</p>
              <div>
                <p className="text-base text-gray-400 flex gap-2">
                  Like: <FaThumbsUp className="text-blue-500" />{" "}
                  <span className="text-orange-400"> {likes}</span>
                </p>
                <p className="text-base text-gray-400">
                  Recipes:{" "}
                  <span className="text-orange-400">{number_of_recipes}</span>{" "}
                </p>
                <p className="text-base text-gray-400 flex gap-2">
                  Reting:{" "}
                  <span className="text-orange-400">{recipes[2].rating}</span>{" "}
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={Math.round(recipes[2]?.rating)}
                    readOnly
                  />{" "}
                </p>
              </div>
              <div className="card-actions justify-end">
                <span onClick={handleFavorite}>
                  {" "}
                  <FaHeart
                    className="text-red-400 cursor-pointer"
                    style={{ fontSize: "30px" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <Link to="/">
          {" "}
          <button className="btn btn-success">
            <FaArrowLeft className="mr-2" /> Back to Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default ViewRecipes;
