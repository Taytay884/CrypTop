import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ContactService from '../../services/ContactService'
import SmartInput from '../../components/SmartInput/SmartInput'

import './ContactEditPage.css';

class ContactEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                _id: null,
                picture: '',
                name: '',
                email: '',
                phone: ''
            },
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            ContactService.getContactById(this.props.match.params.id).then(contact => {
                this.setState({ contact });
                console.log(contact);
            })
        } else {
            const contact = ContactService.getEmptyContact()
            this.setState({ contact });
            console.log(contact);
        }
        console.log('MOUNTED', this.state.contact)
        if (!this.state.contact._id) return;
    }
    // TODO: HandleSave.
    handleSave = (e) => {
        // const contactId = this.state.contact._id;
        // if (!this.state.contact._id) this.setState({ contact: { _id: contactId } })
        e.preventDefault();
        console.log('STATE', this.state);
        ContactService.saveContact(this.state.contact).then(contact => {
            this.setState({ contact })
            this.props.history.push(`/contact/${contact._id}`)
            console.log('contact:', contact)
        })
    }

    updateInput = (data) => {
        const newContact = Object.assign(this.state.contact, data);
        this.setState(newContact);
        console.log(data)
    }



    render() {
        return (
            <section className="ContactEditPage" >
                <h1>Contact Edit</h1>
                <img src={this.state.contact.picture} />
                <form>
                    <SmartInput id="name" updateInput={this.updateInput} value={this.state.contact.name} />
                    < ul >
                        <li className="flex">
                            <i className="email-icon"></i>
                            <SmartInput id="email" updateInput={this.updateInput} value={this.state.contact.email} />
                        </li>
                        <li className="flex">
                            <i className="phone-icon"></i>
                            <SmartInput id="phone" updateInput={this.updateInput} value={this.state.contact.phone} />
                        </li>
                    </ul>
                    <button onClick={this.handleSave}>
                        Save
                    </button>
                </form>
            </section >
        );
    }
}

export default ContactEditPage;


// How I'm getting something from the service and put it into the state.

// How can I pass props to children...