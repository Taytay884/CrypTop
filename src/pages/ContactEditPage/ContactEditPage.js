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
                _id: this.props.match.params.id,
                name: '',
            },
        }
    }

    componentDidMount() {
        console.log('MOUNTED', this.state.contact)
        if (!this.state.contact._id) return;
        ContactService.getContactById(this.state.contact._id).then(contact => {
            this.setState({ contact });
            console.log(contact);
        })
    }

    handleSave = () => {
        ContactService.saveContact(this.state.contact);
        console.log('SAVED:', this.state.contact)
    }

    updateInput = (data) => {
        this.setState(data);
        console.log(this.state.contact);
    }

    // handleInput = (e) => {
    //     const value = e.target.value;
    //     const name = e.target.name;
    //     this.setState({ [name]: value })
    //     console.log(name)
    // }

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
                            {/* <input type="text" value={this.state.contact.email} /> */}
                        </li>
                        <li className="flex">
                            <i className="phone-icon"></i>
                            {/* <input type="text" value={this.state.contact.phone} /> */}
                        </li>
                    </ul>
                    <Link to={`/contact/${this.state.contact._id}`}>
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