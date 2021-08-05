import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListUserType, NewUserType, userAPI } from "../../services/user-api";
import { ErrorType } from "../../utils/types";
import { RootStateType } from "../store";
import { setErrorText, setIsLoading } from "./auth-reducer";

const initialState = {
    allUsers: [] as Array<ListUserType>,
    createNewUser: false,
    checkedUserForUpdatingId: null as number | null,
    isCreateSuccess: false,
    isUpdateSuccess: false,
};

export const fetchAllUsers = createAsyncThunk<
    ListUserType[],
    string,
    { rejectValue: string; state: RootStateType }
>("user/fetchAllUsers", async (token, { rejectWithValue, dispatch }) => {
    dispatch(setIsLoading(true));
    try {
        const response = await userAPI.fetchUsers(token);
        dispatch(setIsLoading(false));
        return response.data;
    } catch (e) {
        setTimeout(dispatch, 5000, setErrorText({ error: "" }));
        const error: ErrorType = e;
        dispatch(setErrorText({ error: error.response.statusText }));
        dispatch(setIsLoading(false));
        return rejectWithValue(
            error.response ? error.response.statusText : e.message
        );
    }
});

export const createNewUserTC = createAsyncThunk<
    ListUserType,
    NewUserType,
    { rejectValue: string; state: RootStateType }
>(
    "user/createNewUserTC",
    async (data, { rejectWithValue, getState, dispatch }) => {
        const { token } = getState().auth;
        dispatch(setIsLoading(true));
        try {
            const response = await userAPI.createNewUser(token, data);
            dispatch(setIsLoading(false));
            return response.data;
        } catch (e) {
            setTimeout(dispatch, 5000, setErrorText({ error: "" }));
            const error: ErrorType = e;
            dispatch(setErrorText({ error: error.response.statusText }));
            dispatch(setIsLoading(false));
            return rejectWithValue(
                error.response ? error.response.statusText : e.message
            );
        }
    }
);

export const updateUserTC = createAsyncThunk<
    ListUserType,
    NewUserType,
    { rejectValue: string; state: RootStateType }
>(
    "user/updateUserTC",
    async (data, { rejectWithValue, getState, dispatch }) => {
        const { token } = getState().auth;
        const { checkedUserForUpdatingId } = getState().user;
        dispatch(setIsLoading(true));
        try {
            const response = await userAPI.updateUser(
                token,
                checkedUserForUpdatingId,
                data
            );
            dispatch(setIsLoading(false));
            return response.data;
        } catch (e) {
            setTimeout(dispatch, 5000, setErrorText({ error: "" }));
            const error: ErrorType = e;
            dispatch(setErrorText({ error: error.response.statusText }));
            dispatch(setIsLoading(false));
            return rejectWithValue(
                error.response ? error.response.statusText : e.message
            );
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setNewUserFlag: (state, action: PayloadAction<boolean>) => {
            state.createNewUser = action.payload;
        },
        setIsCreateSuccess: (state, action: PayloadAction<boolean>) => {
            state.isCreateSuccess = action.payload;
        },
        setIsUpdateSuccess: (state, action: PayloadAction<boolean>) => {
            state.isUpdateSuccess = action.payload;
        },
        setCheckedUserIdForUpdating: (
            state,
            action: PayloadAction<number | null>
        ) => {
            state.checkedUserForUpdatingId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.allUsers = action.payload;
            })
            .addCase(createNewUserTC.pending, (state) => {
                state.isCreateSuccess = false;
            })
            .addCase(createNewUserTC.fulfilled, (state) => {
                state.isCreateSuccess = true;
            })
            .addCase(updateUserTC.pending, (state) => {
                state.isUpdateSuccess = false;
            })
            .addCase(updateUserTC.fulfilled, (state) => {
                state.isUpdateSuccess = true;
                state.checkedUserForUpdatingId = null;
            });
    },
});
export const {
    setNewUserFlag,
    setIsCreateSuccess,
    setCheckedUserIdForUpdating,
} = userSlice.actions;
