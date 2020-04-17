import axios from "axios";

export const fetchData = () => (dispatch) => {
  axios
    .get("http://localhost:3333/smurfs")
    .then((response) => {
      console.log(response.data);
      dispatch({ type: "SMURF_ARRAY", payload: response.data });
    })
    .catch((error) => {
      console.log("YOURE GETTING AN ERROR", error);
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: "SMURF_ADDER" });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
