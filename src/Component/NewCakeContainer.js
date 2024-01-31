import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { buyCake } from "../redux/cake/cakeActions";
import { connect } from "react-redux";
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1 className="bg-success">Number of cakes : {props.numberOfCakes}</h1>

      <input
        type="text"
        value={number}
        placeholder="How much do you want to buy"
        onChange={(e) => setNumber(e.target.value)}
      />
      <Button variant="success" onClick={() => props.buycake(number)}>
        <b>Buy {number} Cake</b>
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
    buycake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
