import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import usersReducer  from "./users_reducer";
import authReducer from "./auth_reducer";



let reducers = combineReducers({
    profilePage:  profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer 
});

const store = createStore(reducers);

window.store = store;

export default store;