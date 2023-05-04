import React from "react";

const FreshFood = () => {
  return (
    <div className="my-8 bg-cyan-200 p-4 rounded-md">
      <h1 className="text-5xl text-center font-semibold mb-12 mt-4 text-gray-500">
        Clean And Fresh Food <br />
        With Great Nutrition
      </h1>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-md border border-orange-200">
            {" "}
            <h3 className="text-2xl font-semibold mb-2">100% natural</h3>
            <p className="text-base text-gray-600">
              The first step in any effective health service is to consult with
              a healthcare professional, such as a registered dietitian or
              nutritionist. They can help assess your individual needs,
              preferences, and goals to develop a personalized plan.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-md border border-orange-200">
            <h3 className="text-2xl font-semibold mb-2">
              {" "}
              Optimal weigth Gain
            </h3>
            <p className="text-lg text-gray-600">
              {" "}
              A natural diet would prioritize whole, unprocessed foods like
              fruits, vegetables, whole grains, lean protein sources, and
              healthy fats. These foods are rich in nutrients and can help
              support weight gain in a healthy way.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-md border border-orange-200">
            <h3 className="text-2xl font-semibold mb-2">
              Diet Health Service Give Me{" "}
            </h3>
            <p className="text-lg text-gray-600">
              To gain weight, you need to consume more calories than you burn.
              However, it's important to do this in a healthy and sustainable
              way. A registered dietitian or nutritionist can help you determine
              your caloric needs and create a plan that supports healthy weight
              gain.
            </p>
          </div>
        </div>
        <div>
          <img className="rounded-md border-2 border-orange-300"
            src="https://img.freepik.com/free-photo/woman-dining-table-with-variety-organic-healthy-food-top-view-concept-healthy-eating-celebration_169016-4856.jpg?t=st=1683136098~exp=1683136698~hmac=3be4ba2193622ef56a591137cfd3c51cdcc529891b614470c05cd40e88830e5e"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FreshFood;
