import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authSlice } from "./reducers/auth-reducer";
import { userSlice } from "./reducers/user-reducer";

export const rootReducer = combineReducers({
    auth: authSlice.reducer,
    user: userSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
