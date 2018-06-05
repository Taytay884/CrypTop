import React, { Component } from "react";
import { Link } from "react-router-dom";

// Store:
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadContact, saveUser, transferMoney } from "../../store/actions";
import "./ContactDetailsPage.css";

import SmartInput from "../../components/SmartInput/SmartInput";

class ContactDetailsPage extends Component {
  state = {
    contact: {},
    amount: ""
  };

  componentDidMount() {
    const contactId = this.props.match.params.id;
    this.props.loadContact(contactId, contact => {
      this.setState({ contact });
    });
  }

  updateInput = data => {
    this.setState(data);
  };

  handleTransfer = e => {
    e.preventDefault();
    let amount = this.state.amount;
    let cloneUser = Object.assign({}, this.props.user);
    if (amount <= 0 || cloneUser.balance < amount) {
      console.log("Error: insufficent funds");
      return;
    }
    cloneUser.balance -= amount;
    this.props.saveUser(cloneUser);
    this.props.transferMoney({ amount, to: this.state.contact.name });
    this.setState({ amount: "" });
  };
  render() {
    if (this.state.contact) {
      return (
        <section className="ContactDetailsPage page">
          <div className="details">
            <h1 className="title-tab">Details</h1>
            <img src={this.state.contact.picture} alt="" />
            <h2>{this.state.contact.name}</h2>
            <ul>
              <li className="flex">
                <i className="email-icon" />
                {this.state.contact.email}
              </li>
              <li className="flex">
                <i className="phone-icon" />
                {this.state.contact.phone}
              </li>
            </ul>
            <Link to={`/contact/${this.state.contact._id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <hr />
          <div>
            <form onSubmit={this.handleTransfer}>
              <h2>Want to transfer coins?</h2>
              <label htmlFor="amount">Amount</label>
              <SmartInput
                id="amount"
                type="number"
                updateInput={this.updateInput}
                value={this.state.amount}
              />
              <button type="submit">Transfer</button>
            </form>
          </div>
        </section>
      );
    } else {
      return (
        <section className="ContactDetailsPage">
          <h1>Details</h1>
        </section>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts,
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadContact, saveUser, transferMoney }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDetailsPage);

// How I'm getting something from the service and put it into the state.

// How can I pass props to children...
