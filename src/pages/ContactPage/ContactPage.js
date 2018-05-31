import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ContactList from '../../components/ContactList/ContactList'
import Filter from '../../components/Filter/Filter'
import './ContactPage.css';

// Store
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadContacts } from '../../store/actions';

class ContactPage extends Component {

    componentDidMount() {
        this.renderContacts();
    }

    renderContacts = (filterBy = null) => {
        this.props.loadContacts();
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
                <ContactList contacts={this.props.contacts} />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadContacts,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
