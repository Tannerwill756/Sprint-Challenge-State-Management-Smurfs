const initialState = {
  smurfs: [],
  name: "",
  age: "",
  height: "",

  isFetching: false,
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SMURF_ARRAY":
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };
    case "SMURF_ADDER":
      return {
        ...state,
      };

    default:
      return state;
  }
};
