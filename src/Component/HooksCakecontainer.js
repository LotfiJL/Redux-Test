import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
function HooksCakecontainer() {
  const numberOfCakes = useSelector((state) => state.numberOfcakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Numnber of Cakes : {numberOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakecontainer;
