import * as types from './types';
import ContactService from '../services/ContactService';

export function loadContacts(filterBy = null) {
    return dispatch => {
        ContactService.getContacts(filterBy).then(contacts => {
            dispatch({ type: types.LOAD_CONTACTS, payload: contacts });
        })
            .catch(err => console.log('Error:', err));
    }
}

export function saveContact(contact = {}, callback) {
    return dispatch => {
        ContactService.saveContact(contact).then(contacts => {
            dispatch({ type: types.SAVE_CONTACT, payload: contacts })
            callback(contacts);
        })
    }
}

export function loadContact(id, callback) {
    return dispatch => {
        ContactService.getContactById(id).then(contact => {
            dispatch({ type: types.LOAD_CONTACT, payload: contact })
            callback(contact);
        })
    }
}