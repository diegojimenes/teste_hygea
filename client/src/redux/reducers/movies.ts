import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface i_movies {
  title: string
  banner: string
  description: string
  director: string
  producer: string
}

const initialState: i_movies[] = []

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    save: (state, action: PayloadAction<i_movies[]>) => {
      state = action.payload
    },
    paginate: (state, action: PayloadAction<i_movies[]>) => {
      state = [...state, ...action.payload]
    },
    clear: (state) => {
      state = []
    },
  },
})


export const { save, paginate, clear } = moviesSlice.actions

export default moviesSlice.reducer