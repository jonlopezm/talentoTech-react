import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./features/numberSlice";
import usersReducer from './features/userSlice';


const store = configureStore({
    reducer: {
        number: numberReducer,
        users: usersReducer,
    },
});

export default store;