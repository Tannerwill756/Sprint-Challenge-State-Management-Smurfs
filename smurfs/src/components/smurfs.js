import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/index";

const Smurfs = (props) => {
  return (
    <div>
      {props.smurfs.map((smurf) => (
        <div key={smurf.id}>
          <h2>{smurf.name}</h2>
          <p>SMURF AGE</p>
          <p>SMURF HEIGHT</p>
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
