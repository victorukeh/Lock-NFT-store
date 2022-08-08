import { FETCH_USERS, NEW_USER, SET_USERNAME } from "../actions/types";

const initialState = {
	users: [],
	user: {},
	username: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state,
				users: action.payload,
			};
		case SET_USERNAME:
			return {
				...state,
				username: action.username,
			};
		default:
			return state;
	}
}
