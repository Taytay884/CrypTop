import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ContactService from '../../services/ContactService'
import ContactList from '../../components/ContactList/ContactList'
import Filter from '../../components/Filter/Filter'
import './ContactPage.css';

class ContactPage extends Component {
    state = {
        contacts: [],
    }

    componentDidMount() {
        this.renderContacts();
    }

    renderContacts = (filterBy = null) => {
        ContactService.getContacts(filterBy).then(contacts => {
            console.log(contacts)
            this.setState({ contacts });
        })
    }

    handleFilter = (e) => {
        const input = e.target.value;
        let filterBy = { term: input };
        this.renderContacts(filterBy);
    }

    render() {
        return (
            <section className="ContactPage">
                <Filter handleFilter={this.handleFilter} />
                <Link to='/contact/new'><button>Add Contact</button></Link>
                <h1>Contacts</h1>
                {/* {listItems} */}
                <ContactList contacts={this.state.contacts} />
            </section>
        );
    }
}

export default ContactPage;
