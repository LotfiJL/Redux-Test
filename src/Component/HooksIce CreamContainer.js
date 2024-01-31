import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/Icecream/iceCreamAction";
import Button from "react-bootstrap/Button";
function HooksIcecreamContainer() {
  const numberOfIcecream = useSelector(
    (state) => state.IceCream.numberOfIcecream
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="bg-warning">
        Numnber of IceCream -Hookks Method- : {numberOfIcecream}
      </h1>
      <Button variant="warning" onClick={() => dispatch(buyIcecream())}>
        <h4>Buy IceCream</h4>
      </Button>
    </div>
  );
}

export default HooksIcecreamContainer;
