import React from "react";
import DuckyOfDay from "../elements/DuckyOfDay";
import DuckyCard from "../elements/DuckyCard";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";

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
    <div id={styles.homepageContainer}>
      <div id={styles.DODHolder}>
        <DuckyOfDay />
      </div>
      <div></div>
      <div id={styles.duckyContainer} className="grid grid-cols-5 justify-center align-center">
        {listOfDucks.map((duck) => {
          return <DuckyCard key={duck.id} duck={duck} />;
        })}
      </div>
    </div>
  );
};

export default Home;
