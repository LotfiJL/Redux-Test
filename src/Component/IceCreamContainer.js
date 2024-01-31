import React from "react";
import Button from "react-bootstrap/Button";
import { buyIcecream } from "../redux/Icecream/iceCreamAction";
import { connect } from "react-redux";
function IceCreamContainer(props) {
  return (
    <div>
      <h1 className="bg-success">Number of cakes : {props.numberOfIcecream}</h1>
      <Button variant="success" onClick={props.buyIcecream}>
        <b>Buy Icecream</b>
      </Button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numberOfIcecream: state.IceCream.numberOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
