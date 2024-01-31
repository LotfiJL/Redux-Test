import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buyIcecream } from "../redux/Icecream/iceCreamAction";
import Button from "react-bootstrap/Button";
const ItemCoontainer = (props) => {
  return (
    <div>
      <h1>Item : {props.item}</h1>
      <Button variant="danger" onClick={props.buyItems}>
        Buy Items
      </Button>
    </div>
  );
};

const mapStateToprops = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numberOfcakes
    : state.IceCream.numberOfIcecream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return {
    buyItems: dispatchFunction,
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(ItemCoontainer);
