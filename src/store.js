import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./features/numberSlice";
import usersReducer from './features/userSlice';
import { apiSlice } from "./features/api/apiSlice";
import authSlice from "./features/authSlice";
import { apiColombiaSlice } from "./features/api/apiColombiaSlice";
import { apiHousesSlice } from "./features/api/apiHousesSlice";
import { apiMessageSlice } from "./features/api/apiMessageSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [apiHousesSlice.reducerPath]: apiHousesSlice.reducer,
        [apiColombiaSlice.reducerPath]: apiColombiaSlice.reducer,
        [apiMessageSlice.reducerPath]: apiMessageSlice.reducer,
        number: numberReducer,
        users: usersReducer,
        auth: authSlice,        
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
        .concat(apiSlice.middleware)
        .concat(apiHousesSlice.middleware)
        .concat(apiColombiaSlice.middleware)
        .concat(apiMessageSlice.middleware),
});

export default store;