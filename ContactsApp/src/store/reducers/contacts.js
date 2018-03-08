import {ADD_CONTACT, DELETE_CONTACT, SELECT_CONTACT, DESELECT_CONTACT} from '../actions/actionTypes';

const initialState = {
    contacts: [{name:'Fred', image:'http://www.math.uni-frankfurt.de/~person/_4170854.jpg'},{name:'Bill', image:'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person-279x300.jpg'}],
    selectedContact: null
}

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CONTACT: 
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    {
                        name: action.payload, 
                        image: 'http://www.math.uni-frankfurt.de/~person/_4170854.jpg'
                    }
                ]
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => {
                    return contact !== state.selectedContact;
                }),
                selectedContact: null
            };
        case SELECT_CONTACT: 
            return {
                ...state,
                selectedContact: action.payload
            };
        case DESELECT_CONTACT:
            return {
                ...state,
                selectedContact: null
            }
        default:
        return state;
    }
};

export default contactReducer;