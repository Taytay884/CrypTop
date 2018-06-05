import React, { Component } from "react";
import "./HomePage.css";

// Store
import { connect } from "react-redux";

// CMPS:
import MoveList from "../../components/MoveList/MoveList";

class HomePage extends Component {
  render() {
    const user = this.props.user;
    return (
      <section className="HomePage page">
        <h1 className="title-tab">Home</h1>
        Hello {user.name}, Your balance is {user.balance}.
        <h2>Your Moves:</h2>
        {user.moves.length ? (
          <MoveList moves={user.moves} />
        ) : (
          <h3>No transactions for now.</h3>
        )}
        {/* <MoveList moves={this.props.user.moves} /> */}
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
