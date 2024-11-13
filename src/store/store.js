import { configureStore } from '@reduxjs/toolkit'
import { detailUserSlice, headerSlice } from './slices'

export const store = configureStore({
	reducer: {
		header: headerSlice,
		detailUser: detailUserSlice,
	},
})
