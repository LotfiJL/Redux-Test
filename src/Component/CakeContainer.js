import React from "react";
import Button from "react-bootstrap/Button";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h1 className="bg-success">Number of cakes : {props.numberOfCakes}</h1>
      <Button variant="success" onClick={props.buycake}>
        <b>Buy Cake</b>
      </Button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfcakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buycake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
