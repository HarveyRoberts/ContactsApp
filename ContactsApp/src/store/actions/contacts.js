import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SELECT_CONTACT,
	DESELECT_CONTACT
} from "./actionTypes";

export const addContact = name => {
	return dispatch => {
		fetch("", {
			method: "POST"
		});
	};
};

export const deleteContact = id => {
	return {
		type: DELETE_CONTACT,
		payload: id
	};
};
