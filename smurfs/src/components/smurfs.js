import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/index";

const Smurfs = (props) => {
  const fetchDataHandler = (e) => {
    e.preventDefault();
    props.fetchData();
  };
  return (
    <div>
      <button onClick={fetchDataHandler}>Checkout my smurfs</button>
      {props.smurfs.map((smurf) => (
        <div key={smurf.id}>
          <h2>{smurf.name}</h2>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.smurfs);
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchData })(Smurfs);
