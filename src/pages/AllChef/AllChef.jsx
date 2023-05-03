import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";

const AllChef = () => {
  const [allChef, setAllChef] = useState([]);
  console.log(allChef);

  useEffect(() => {
    fetch("http://localhost:5000/alldatas")
      .then((res) => res.json())
      .then((data) => setAllChef(data));
  }, []);

  return (
      <div>
          <h2 className="text-6xl text-center mt-8 ">All Chefs !</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {allChef.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </div>
  );
};

export default AllChef;
