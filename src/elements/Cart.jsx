import React from 'react'
import DuckyCard from './DuckyCard'
import { useState, useEffect} from "react"
import axios from 'axios'

const Cart = () => {
  const [duckyCart, setDuckyCart] = useState([])
  const cartOfDucks = () => {
    axios
      .get("/api/cart")
      .then((res) => {
        console.log(res.data)
        // if(res.data) {
          setDuckyCart(res.data);
        // }
      })
      .catch(() => {
        alert({
          type: "failure",
          title: "Something went wrong.",
          paragraph: "No ducks in cart",
        });
      });
  };

  useEffect(() => {
    console.log("pageload")
    cartOfDucks();
}, []);

  return (
    <div className="grid grid-cols-4 justify-center align-center">
      {duckyCart.map((duck) => {
        return <DuckyCard key={duck.id} duck={duck}/>;
      })}
    </div>
  )
}

export default Cart