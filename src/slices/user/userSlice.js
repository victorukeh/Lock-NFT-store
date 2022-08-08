import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "users",
	initialState: [],
	reducers: {
		setUsername: (state, action) => {
			const username = action.payload;
			return [...state, username];
		},
	},
});
  
// For dispatch
export const { setUsername } = userSlice.action;

// For configureStore
export default userSlice.reducer;
