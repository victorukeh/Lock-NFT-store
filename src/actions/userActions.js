import { FETCH_USERS, NEW_USER } from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
	const response = await axios.get("");
	dispatch({
		type: FETCH_USERS,
		payload: response,
	});
};
