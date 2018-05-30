import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = (props) => {
    // const contacts = props.contacts.map(contact => <ContactPreview key={contact._id} contact={contact} />)
    return (
        <header className="App-header flex space-between align-center justify-center">
            <h1 className="App-title">CrypTop</h1>
            <div className="nav-bar">
                <ul className="flex">
                    <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="selected" to="/contact">Contacts</NavLink></li>
                    <li><NavLink exact activeClassName="selected" to="/contact">Details</NavLink></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
