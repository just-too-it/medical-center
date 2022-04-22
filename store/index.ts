import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    profile: profileReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
