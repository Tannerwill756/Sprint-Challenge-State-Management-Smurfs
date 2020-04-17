import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const changeHandler = (event) => {
    event.preventDefault();
    setSmurf({
      ...smurf,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addSmurf(smurf);
    // setSmurf({
    //   name: "",
    //   age: "",
    //   height: "",
    // });
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        value={smurf.name}
        onChange={changeHandler}
      />

      <label>Age: </label>
      <input
        type="text"
        name="age"
        value={smurf.age}
        onChange={changeHandler}
      />

      <label>Height: </label>
      <input
        type="text"
        name="height"
        value={smurf.height}
        onChange={changeHandler}
      />

      <button type="submit" value="submit">
        Add
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    name: state.name,
    age: state.age,
    height: state.height,
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
