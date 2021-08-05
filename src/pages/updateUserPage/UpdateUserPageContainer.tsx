import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Preloader } from "../../components/preloader/Preloader";
import { NewUserType } from "../../services/user-api";
import { StatusType } from "../../store/reducers/auth-reducer";
import {
    setCheckedUserIdForUpdating,
    updateUserTC,
} from "../../store/reducers/user-reducer";
import { RootStateType } from "../../store/store";
import UpdateUserPage from "./UpdateUserPage";

type UpdateUserPageStateType = {
    isLoggedSuccess: boolean;
    isLoading: boolean;
    initApp: StatusType;
    error: string;
};

type PageType = {
    isUpdateSuccess: boolean;
};

const UpdateUserPageContainer = () => {
    const dispatch = useDispatch();

    const { isLoggedSuccess, isLoading, initApp, error } = useSelector<
        RootStateType,
        UpdateUserPageStateType
    >((state) => state.auth);
    const { isUpdateSuccess } = useSelector<RootStateType, PageType>(
        (state) => state.user
    );

    const handleOnSubmit = useCallback((data: NewUserType) => {
        dispatch(updateUserTC(data));
        // eslint-disable-next-line
    }, []);

    const backHandler = useCallback(() => {
        dispatch(setCheckedUserIdForUpdating(null));
        // eslint-disable-next-line
    }, []);

    if (initApp === "loading") {
        return <Preloader />;
    }

    if (!isLoggedSuccess) {
        return <Redirect to={"/emphasoft-test/login"} />;
    }

    if (isUpdateSuccess) {
        return <Redirect to={"/emphasoft-test/users-list"} />;
    }

    return (
        <UpdateUserPage
            isLoading={isLoading}
            error={error}
            handleOnSubmit={handleOnSubmit}
            backHandler={backHandler}
        />
    );
};

export default UpdateUserPageContainer;
