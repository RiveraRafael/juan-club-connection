
import { createSlice } from '@reduxjs/toolkit'


export const saveButtonClick = createSlice({
    name: 'saveButtonClick',
    initialState: {
      value: false,
    },
    reducers: {
        saveButtonClick_setState: (state, action) => {
          
        state.value = action.payload
        
      },
    },
  })
  
  export const { saveButtonClick_setState } = saveButtonClick.actions
  
  export default saveButtonClick.reducer