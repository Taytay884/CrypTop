import * as types from './types';
import ContactService from '../services/ContactService';

function loadContacts(contacts) {
    return {
        type: types.LOAD_CONTACTS,
        payload: contacts,
    }
}

export function getContacts(filterBy = null) {
    return (dispatch) => {
        ContactService.getContacts(filterBy).then(contacts => {
            console.log(contacts)
            dispatch(loadContacts(contacts));
        })
            .catch(err => console.log('Error:', err));
    }
}

// export function saveContact(contact = {}) {
//     return (dispatch) => {
//         ContactService.saveContact(this.state.contact).then(contact => {
//             this.setState({ contact })
//             this.props.history.push(`/contact/${contact._id}`)
//             console.log('contact:', contact)
//         })
//     }
// }