import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Preloader } from "../../components/preloader/Preloader";
import {
    logInUserInAppTC,
    setLoginUserData,
    StatusType,
} from "../../store/reducers/auth-reducer";
import { RootStateType } from "../../store/store";
import LoginPage from "./LoginPage";

type LoginPageStateType = {
    isLoading: boolean;
    isLoggedSuccess: boolean;
    initApp: StatusType;
    error: string;
};

const LoginPageContainer = () => {
    const dispatch = useDispatch();
    const { isLoggedSuccess, isLoading, initApp, error } = useSelector<
        RootStateType,
        LoginPageStateType
    >((state) => state.auth);

    const handleOnSubmit = useCallback((username: string, password: string) => {
        dispatch(setLoginUserData({ username, password }));
        dispatch(logInUserInAppTC({ username, password }));
        // eslint-disable-next-line
    }, []);

    if (initApp === "loading") {
        return <Preloader />;
    }

    if (isLoggedSuccess) {
        return <Redirect to={"/emphasoft-test/users-list"} />;
    }

    return (
        <LoginPage
            isLoading={isLoading}
            isLoggedSuccess={isLoggedSuccess}
            error={error}
            handleOnSubmit={handleOnSubmit}
        />
    );
};

export default LoginPageContainer;
