import * as types from '../types';
import _ from 'lodash';
import { combineReducers } from 'redux'

const initState = {
    contacts: [],
    contact: {},
}

export function contacts(state = initState, action) {

    let newState = null;
    switch (action.type) {
        case types.LOAD_CONTACTS:
            newState = _.cloneDeep(state);
            newState.contacts = action.payload;
            return newState;
        case types.LOAD_CONTACT:
            newState = _.cloneDeep(state);
            newState.contact = action.payload;
            return newState;
        case types.SAVE_CONTACT:
            newState = _.cloneDeep(state);
            newState.contacts = action.payload;
            return newState;
        default:
            return state;
    }
}

// const contactPage = combineReducers({
    // contacts,
// });

// export default contactPage;