import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import Display from "./Display";

class Home extends Component {
  render() {
    return (
      <div className="d-flex align-items-center flex-column">
        <h1>Home</h1>
        <h1>{this.props.counter.value}</h1>
        <Link to="/display">Back to Display</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps)(Home);
