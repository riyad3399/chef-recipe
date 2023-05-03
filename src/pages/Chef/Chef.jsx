import React from "react";

const Chef = ({ chef }) => {
  const { chef_photo, experience, chef_name, number_of_recipes, likes } = chef;

  return (
      <div>
           
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={chef_photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{chef_name}</h2>
          <div>
            <p>{experience}</p>
            <p>{number_of_recipes}</p>
            <p>{likes}</p>
          </div>

          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
