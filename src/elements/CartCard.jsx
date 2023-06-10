import React from "react";
import axios from "axios";
import { Card } from "flowbite-react";

const CartCard = () => {
  let duckObj = { ...duck };
  let addToCart = (req, res) => {
    axios
      .post("/api/cart", duckObj)
      .then((res) => console.log(res))
      .catch((theseHands) => console.log(theseHands));
  };

  return (
    <Card className="w-64" imgAlt={duck.name} imgSrc={duck.imgURL}>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>{duck.name}</p>
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${duck.price}
        </span>
        <a
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          href="#"
        >
          {/* <button onClick={addToCart}>Add to cart</button> */}
        </a>
      </div>
    </Card>
  );
};

export default CartCard;
