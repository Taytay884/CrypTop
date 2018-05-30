import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ContactList from '../../components/ContactList/ContactList'
import Filter from '../../components/Filter/Filter'
import './ContactPage.css';

// Store
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getContacts } from '../../store/actions';

class ContactPage extends Component {
    state = {
        contacts: [],
    }

    componentDidMount() {
        this.renderContacts();
    }

    renderContacts = (filterBy = null) => {
        this.props.getContacts();
        const contacts = this.props.contacts;
        this.setState({ contacts });
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
                <ContactList contacts={this.state.contacts} />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        contacts: state.contacts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getContacts,

    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
