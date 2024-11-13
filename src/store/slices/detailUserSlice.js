import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	detailUser: {},
}

const detailUserSlice = createSlice({
	name: 'detailUser',
	initialState,
	reducers: {
		setDetailUser: (state, action) => {
			state.detailUser = action.payload
		},
	},
})

export const { setDetailUser } = detailUserSlice.actions
export default detailUserSlice.reducer
