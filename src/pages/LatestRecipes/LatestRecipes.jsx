import React from "react";

const LatestRecipes = () => {
  return (
    <div className="bg-green-500 p-10 rounded-md">
      <h2 className="text-center text-5xl font-bold mb-10">Latest Recipes</h2>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="border border-orange-300 rounded-md">
          <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/grilled-beef-steak-dark-wooden-surface_1150-44344.jpg?t=st=1683167092~exp=1683167692~hmac=31d54e1d0d59a006cb38134288102399722c331be537c44f717d10540229c795"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
              Beef Steak
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>The cooking method for steak can vary, but it is commonly grilled, pan-seared, or broiled. When cooked properly, a steak should have a caramelized crust on the outside and a juicy, tender interior.</p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline bg-yellow-500 text-white p-3">Order Now</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?t=st=1683166992~exp=1683167592~hmac=364afe9b4a52a72af72a36f263cabcc80fcb7bf5c0347253898e169f7b2594e1"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Pizza
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Pizza is often enjoyed as a casual meal or snack, and is commonly served in slices that can be eaten by hand. It is also a popular food for delivery, and can be found in many restaurants</p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline bg-yellow-500 text-white p-3">Order Now</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl rounded-md">
            <figure>
              <img
                src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?t=st=1683100904~exp=1683101504~hmac=0045cc5cf12b042fb65254da7a3b28edb4441a2f17006c700e12967bcf051d32"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Chicken Biriyani
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Chicken biryani is a popular South Asian rice dish that originated in India but is now enjoyed in many parts of the world. It is made by cooking long-grain basmati rice with chicken</p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline bg-yellow-500 text-white p-3">Order Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestRecipes;
