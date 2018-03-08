import {ADD_CONTACT, DELETE_CONTACT, SELECT_CONTACT, DESELECT_CONTACT} from './actionTypes';

export const addContact = (name) => {
    return {
        type: ADD_CONTACT,
        payload: name
    }
}

export const deleteContact = () => {
    return {
        type: DELETE_CONTACT
    }
}
