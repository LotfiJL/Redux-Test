import React from "react";
import { connect } from "react-redux";

const ItemCoontainer = (propos) => {
  return (
    <div>
      <h1>Item : {propos.item}</h1>
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

export default connect(mapStateToprops)(ItemCoontainer);
