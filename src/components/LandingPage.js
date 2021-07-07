import React, { Component } from "react";
import { connect } from "react-redux";
import { Inc } from "../actions/landingActions";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: "Landing Page",
    };
  }



  handleIncrement =  (data) => {
    console.log(data,"data")
    this.props.Inc(data);
  }
 

  render() {
    return (
      <div>
        <h1>Hello from {this.state.component}</h1>
        <h2>Count = {this.props.value}</h2>
        <button onClick={() => this.handleIncrement(this.props.value)}>
          Increase
        </button>
      </div>
    );
  }
}

const mapStateTOProps = ({ LandingReducers }) => {
  const { value } = LandingReducers;
  return {
    value,
  };
};

export default connect(mapStateTOProps, { Inc })(LandingPage);
