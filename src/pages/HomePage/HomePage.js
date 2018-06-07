import React, { Component } from "react";

import "./HomePage.css";

// Store
import { connect } from "react-redux";

// CMPS:
import MoveList from "../../components/MoveList/MoveList";
import LineChart from "../../components/LineChart/LineChart";

class HomePage extends Component {
  render() {
    const user = this.props.user;
    console.log("user", user);
    return (
      <section className="HomePage page">
        <h1 className="title-tab">Home</h1>
        Hello {user.name}, Your balance is{" "}
        <span className="balance">{user.balance}$</span>
        <LineChart />
        {/* <h2>Your Moves:</h2>
        {user.moves ? (
          <MoveList moves={user.moves} />
        ) : (
          <h3>No transactions for now.</h3>
        )} */}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(HomePage);
