
import { createSlice } from '@reduxjs/toolkit'


export const connection_inputSlice = createSlice({
    name: 'connectionInput',
    initialState: {
      value: "",
    },
    reducers: {
      connection_setValue: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
  export const { connection_setValue } = connection_inputSlice.actions
  
  export default connection_inputSlice.reducer