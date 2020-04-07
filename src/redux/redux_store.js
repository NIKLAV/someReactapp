import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import usersReducer  from "./users_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer 
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;