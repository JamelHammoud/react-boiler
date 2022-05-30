import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
}

const initialState: InitialState = {
}

export const templateSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<any>) => {

    },
  }
})

export const {  } = templateSlice.actions
export default templateSlice.reducer
