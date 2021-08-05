import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAPI, TokenRequestType } from "../../services/auth-api";
import { ErrorType } from "../../utils/types";
import { RootStateType } from "../store";

const initialState = {
    userData: null as TokenRequestType | null,
    isLoading: false,
    isLoggedSuccess: false,
    initApp: "idle" as StatusType,
    token: "",
    error: "",
};

export const logInUserInAppTC = createAsyncThunk<
    { token: string },
    { username: string; password: string },
    { rejectValue: string; state: RootStateType }
>(
    "login/logInUserInApp",
    async ({ username, password }, { rejectWithValue, dispatch }) => {
        try {
            const response = await authAPI.logInUserInApp({
                username,
                password,
            });
            return response.data;
        } catch (e) {
            setTimeout(dispatch, 5000, setErrorText({ error: "" }));
            const error: ErrorType = e;
            return rejectWithValue(
                error.response ? error.response.statusText : e.message
            );
        }
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginUserData: (state, action: PayloadAction<TokenRequestType>) => {
            state.userData = action.payload;
        },
        setLogoutUserData: (state) => {
            state.userData = null;
            state.token = "";
            state.initApp = "idle";
            state.isLoggedSuccess = false;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setInitApp: (state, action: PayloadAction<{ initApp: StatusType }>) => {
            state.initApp = action.payload.initApp;
        },
        setErrorText: (state, action: PayloadAction<{ error: string }>) => {
            state.error = action.payload.error;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logInUserInAppTC.pending, (state, action) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(logInUserInAppTC.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.initApp = "succeeded";
                state.isLoggedSuccess = true;
                state.isLoading = false;
            })
            .addCase(logInUserInAppTC.rejected, (state, action) => {
                if (action.payload) {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            });
    },
});
export const {
    setLoginUserData,
    setLogoutUserData,
    setIsLoading,
    setInitApp,
    setErrorText,
} = authSlice.actions;

export type StatusType = "idle" | "loading" | "succeeded" | "failed";
