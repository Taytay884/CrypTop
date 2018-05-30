import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { contacts } from './reducers/reducers';

const allReducers = combineReducers({
    contacts,
});

export default function configStore() {
    return createStore(
        contacts,
        applyMiddleware(thunk)
    );
}