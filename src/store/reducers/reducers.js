import * as types from '../types';
import _ from 'lodash';
import { combineReducers } from 'redux'

const initState = {
    contacts: [],
}

export function contacts(state = initState, action) {

    console.log(action.type)

    let newState = null;
    switch (action.type) {
        case types.LOAD_CONTACTS:
            const newState = _.cloneDeep(state);
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