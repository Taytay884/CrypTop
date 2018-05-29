import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ContactService from '../../services/ContactService'

import './ContactDetailsPage.css';

class ContactDetailsPage extends Component {
    state = {
        contact: {},
        contactId: this.props.match.params.id,
    }

    componentDidMount() {
        ContactService.getContactById(this.state.contactId).then(contact => {
            console.log(contact)
            this.setState({ contact });
        })
    }

    render() {
        if (this.state.contact) {
            return (
                <section className="ContactDetailsPage">
                    <h1>Contact Details</h1>
                    <img src={this.state.contact.picture} />
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
                    <Link to={`/contact/edit/${this.state.contactId}`}><button>Edit</button></Link>
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

export default ContactDetailsPage;

// How I'm getting something from the service and put it into the state.

// How can I pass props to children...