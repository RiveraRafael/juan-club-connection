 

import { configureStore } from "@reduxjs/toolkit";

import connectionReducer from "./connectionSlice";
import numberReducer from "./numberSlice";
import saveButtonReducer from "./saveButtonSlice";

export default configureStore
({
    reducer: {
    connection: connectionReducer,
    number: numberReducer,
    save: saveButtonReducer,
    },
})