import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";

const AllChef = () => {
  const [allChef, setAllChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alldatas")
      .then((res) => res.json())
      .then((data) => setAllChef(data));
  }, []);

  return (
    <div className="bg-background rounded-md mt-8">
      <h2 className="text-6xl text-center font-bold pt-4 text-orange-500 animate-pulse duration-300 mb-8">
        All Chefs !
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 px-4">
        {allChef.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
