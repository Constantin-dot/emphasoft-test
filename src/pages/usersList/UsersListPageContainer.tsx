import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Preloader } from "../../components/preloader/Preloader";
import { ListUserType } from "../../services/user-api";
import { StatusType } from "../../store/reducers/auth-reducer";
import {
    fetchAllUsers,
    setCheckedUserIdForUpdating,
} from "../../store/reducers/user-reducer";
import { RootStateType } from "../../store/store";
import UsersListPage from "./UsersListPage";

type UsersListPageStateType = {
    isLoading: boolean;
    isLoggedSuccess: boolean;
    initApp: StatusType;
    error: string;
    token: string;
};

type allUsersType = {
    allUsers: Array<ListUserType>;
    checkedUserForUpdatingId: number | null;
};

const UsersListPageContainer = () => {
    const dispatch = useDispatch();

    const { isLoggedSuccess, isLoading, initApp, error, token } = useSelector<
        RootStateType,
        UsersListPageStateType
    >((state) => state.auth);
    const { allUsers, checkedUserForUpdatingId } = useSelector<
        RootStateType,
        allUsersType
    >((state) => state.user);

    const updateUserHandler = useCallback((userId: number) => {
        dispatch(setCheckedUserIdForUpdating(userId));
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        dispatch(fetchAllUsers(token));
        // eslint-disable-next-line
    }, []);

    if (initApp === "loading") {
        return <Preloader />;
    }

    if (checkedUserForUpdatingId) {
        return <Redirect to={"/emphasoft-test/update-user"} />;
    }

    if (!isLoggedSuccess) {
        return <Redirect to={"/emphasoft-test/login"} />;
    }

    return (
        <UsersListPage
            allUsers={allUsers}
            isLoading={isLoading}
            error={error}
            updateUserHandler={updateUserHandler}
        />
    );
};

export default UsersListPageContainer;
