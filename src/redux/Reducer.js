import * as Types from "./Types";

const initialState = {
  count: 0
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_COUNT:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default Reducer;
