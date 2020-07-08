import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Display extends Component {
  render() {
    return (
      <div className="d-flex align-items-center flex-column">
        <h1>Display</h1>
        <h1>{this.props.counter.value}</h1>
        <Link to="/">Back to Counter</Link>
        <Link to="/home">Go to Home</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

export default connect(mapStateToProps)(Display);
