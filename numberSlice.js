
import { createSlice } from '@reduxjs/toolkit'


export const number_inputSlice = createSlice({
    name: 'numberInput',
    initialState: {
      value: "",
    },
    reducers: {
        number_setValue: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
  export const { number_setValue } = number_inputSlice.actions
  
  export default number_inputSlice.reducer