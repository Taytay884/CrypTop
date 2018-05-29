import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ContactService from '../../services/ContactService'
import SmartInput from '../../components/SmartInput/SmartInput'

import './ContactEditPage.css';

class ContactEditPage extends Component {
    state = {
        contact: {
            name: '',

        },
        contactId: this.props.match.params.id,
    }

    componentDidMount() {
        if (!this.state.contactId) return;
        ContactService.getContactById(this.state.contactId).then(contact => {
            this.setState({ contact });
            console.log(contact);
        })
    }

    handleSave = () => {
        // ContactService.saveContact
    }

    updateInput = (data) => {
        console.log(data);
        this.setState(data);
    }

    render() {
        return (
            <section className="ContactEditPage" >
                <h1>Contact Edit:</h1>
                <img src={this.state.contact.picture} />
                <form>
                    <SmartInput id="contact.name" updateInput={this.updateInput} value={this.state.contact.name} />
                    < ul >
                        <li className="flex">
                            <i className="email-icon"></i>
                            {/* <input type="text" value={this.state.contact.email} /> */}
                        </li>
                        <li className="flex">
                            <i className="phone-icon"></i>
                            {/* <input type="text" value={this.state.contact.phone} /> */}
                        </li>
                    </ul>
                    <Link to={`/contact/${this.state.contactId}`}>
                        <button onClick={this.handleSave}>
                            Save
                        </button>
                    </Link>
                </form>
            </section >
        );
    }
}

export default ContactEditPage;


// How I'm getting something from the service and put it into the state.

// How can I pass props to children...