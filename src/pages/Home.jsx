import React from "react";
import DuckyCard from "../elements/DuckyCard";
import { useState, useEffect } from "react";
import axios from "axios";


const Home = () => {
  const [listOfDucks, setListOfDucks] = useState([]);
  const getDucks = () => {
    axios
      .get("/api/ducks")
      .then((res) => {
        if (res.data) {
          setListOfDucks(res.data);
        }
      })
      .catch(() => {
        alert({
          type: "failure",
          title: "Something went wrong.",
          paragraph: "Ducks could not load",
        });
      });
  };

  useEffect(() => {
    getDucks();
  }, []);

  // console.log(listOfDucks);

  return (
    <div className="grid grid-cols-4 justify-center align-center">
      {listOfDucks.map((duck) => {
        return <DuckyCard key={duck.id} duck={duck}/>;
      })}
    </div>
  );
};

export default Home;
