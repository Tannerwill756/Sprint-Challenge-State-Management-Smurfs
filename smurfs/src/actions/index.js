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

export const addSmurf = () => (dispatch) => {
  // axios
  //     .post('http://localhost:3333/smurfs')
};
