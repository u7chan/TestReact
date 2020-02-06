import React from "react";
import { connect } from "react-redux";
import { addCount } from "../redux/Actions";

function ReduxCounter(props) {
  return (
    <div>
      <div>
        <span>Redux count: {props.count}</span>
      </div>
      <div>
        <button onClick={props.handleAddCount}>Add</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAddCount: () => {
      dispatch(addCount());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCounter);
