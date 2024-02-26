export const SET_TEXT_INPUT_VALUE = 'SET_TEXT_INPUT_VALUE';
export const SET_CONNECTION_INPUT_VALUE = 'SET_CONNECTION_INPUT_VALUE';
export const SET_NUMBER_INPUT_VALUE = 'SET_NUMBER_INPUT_VALUE';
export const SET_SAVE_BUTTON_STATE = 'SET_SAVE_BUTTON_STATE';

export const setTextInputValue = (value) => ({
  type: SET_TEXT_INPUT_VALUE,
  payload: value,
});

export const setConnectionInputValue = (value) => ({
  type: SET_CONNECTION_INPUT_VALUE,
  payload: value,
})

export const setNumberInputValue = (value) => ({
  type: SET_NUMBER_INPUT_VALUE,
  payload: value,
})

export const setSaveButtonState = (value) => ({
  type: SET_SAVE_BUTTON_STATE,
  payload: value,
})