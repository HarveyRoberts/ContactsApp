import {ADD_CONTACT, DELETE_CONTACT} from '../actions/actionTypes';

const initialState = {
    contacts: [
        {
            surname: 'Daniel',
            firstname: 'Fred',
            address: '25 Rue Des Colombelles',
            mobilePhone: '+33648579852',
            homePhone: '+33231546895',
            email: 'freddaniel@yahoo.fr',
            dateOfBirth: '05/07/1984',
            id:'kjhgfd78452hg',
            images:[
                'http://www.math.uni-frankfurt.de/~person/_4170854.jpg'
            ]
        },
        {
            surname: 'Gates',
            firstname: 'Bill',
            address: '15 St Parks Avenue',
            mobilePhone: '+444875233552',
            homePhone: '+44484779649',
            email: 'billybill@gmail.com',
            dateOfBirth: '07/12/1967',
            id:'f419h8ytdh48f9h3',
            images: [
                'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person-279x300.jpg'
            ]
        }
    ],
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
                    return contact.id !== action.payload;
                })
            };
        default:
        return state;
    }
};

export default contactReducer;