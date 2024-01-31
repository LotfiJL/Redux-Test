import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import Button from "react-bootstrap/Button";
function HooksCakecontainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfcakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="bg-warning">
        Numnber of Cakes -Hooks Method- : {numberOfCakes}
      </h1>
      <Button variant="warning" onClick={() => dispatch(buyCake())}>
        Buy Cake
      </Button>
    </div>
  );
}

export default HooksCakecontainer;
