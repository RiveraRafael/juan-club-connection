

import { setConnectionInputValue, setNumberInputValue } from "./actions"

const connectionReducer = (state = initialState, action) => {
  switch (action.type)
  {
    case setConnectionInputValue:
      return {...state, connection: action.payload}
    default:
      return state
  }
}
const numberReducer = (state = initialState, action) => {
  switch (action.type)
  {
    case setNumberInputValue:
      return {...state, number: action.payload}
    default:
      return state
  }
}