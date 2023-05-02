import React from "react";
import Lottie from "lottie-react";
import chef from "../../lottie/chef.json";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 items-center bg-banner">
      <div className="m-4  p-5">
        <h2 className="text-6xl font-bold ">
          Welcome to 
        </h2>
          <h2 className="text-orange-300 text-6xl font-extrabold my-4 duration-300 animate-pulse">
            Cook's Corner
          </h2>
        <p className="text-gray-100 text-2xl mt-2">
          the ultimate destination for food enthusiasts and culinary
          connoisseurs alike. We are proud to present the world's top chefs and
          their signature dishes
        </p>
        <button className="btn btn-primary mt-3">Get Started</button>
      </div>
      <div>
        <Lottie animationData={chef}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
