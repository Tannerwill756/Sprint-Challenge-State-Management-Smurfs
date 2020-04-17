import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/index";

function SmurfForm() {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  return (
    <div>
      <label>Name: </label>
      <input type="text" name="name" />

      <label>Age: </label>
      <input type="text" name="age" />

      <label>Height: </label>
      <input type="text" name="height" />

      <button>Add</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { smurfs: state.smurfs };
};

export default connect(mapStateToProps, { fetchData })(SmurfForm);
