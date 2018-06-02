import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ContactService from '../../services/ContactService'

// Store:
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadContact } from '../../store/actions'
import './ContactDetailsPage.css';

class ContactDetailsPage extends Component {
    state = {
        contact: {},
    }

    componentDidMount() {
        const contactId = this.props.match.params.id;
        this.props.loadContact(contactId, contact => {
            console.log(contact);
            this.setState({ contact })
        });
    }

    render() {
        if (this.state.contact) {
            return (
                <section className="ContactDetailsPage">
                    <h1>Contact Details</h1>
                    <img src={this.state.contact.picture} alt='' />
                    <h2>
                        {this.state.contact.name}
                    </h2>
                    <ul>
                        <li className="flex">
                            <i className="email-icon"></i>
                            {this.state.contact.email}
                        </li>
                        <li className="flex">
                            <i className="phone-icon"></i>
                            {this.state.contact.phone}
                        </li>
                    </ul>
                    <Link to={`/contact/${this.state.contact._id}/edit`}><button>Edit</button></Link>
                </section>
            );
        } else {
            return (
                <section className="ContactDetailsPage">
                    <h1>Contact Details</h1>
                </section>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.contacts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadContact
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsPage);

// How I'm getting something from the service and put it into the state.

// How can I pass props to children...