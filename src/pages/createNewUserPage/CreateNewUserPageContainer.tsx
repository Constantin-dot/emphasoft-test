import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Preloader } from "../../components/preloader/Preloader";
import { NewUserType } from "../../services/user-api";
import { StatusType } from "../../store/reducers/auth-reducer";
import { createNewUserTC } from "../../store/reducers/user-reducer";
import { RootStateType } from "../../store/store";
import CreateNewUserPage from "./CreateNewUserPage";

type CreateNewUserPageStateType = {
    isLoggedSuccess: boolean;
    isLoading: boolean;
    initApp: StatusType;
    error: string;
};

type PageType = {
    isCreateSuccess: boolean;
};

const CreateNewUserPageContainer = () => {
    const dispatch = useDispatch();

    const { isLoggedSuccess, isLoading, initApp, error } = useSelector<
        RootStateType,
        CreateNewUserPageStateType
    >((state) => state.auth);
    const { isCreateSuccess } = useSelector<RootStateType, PageType>(
        (state) => state.user
    );

    const handleOnSubmit = useCallback((data: NewUserType) => {
        dispatch(createNewUserTC(data));
        // eslint-disable-next-line
    }, []);

    if (initApp === "loading") {
        return <Preloader />;
    }

    if (!isLoggedSuccess) {
        return <Redirect to={"/emphasoft-test/login"} />;
    }

    if (isCreateSuccess) {
        return <Redirect to={"/emphasoft-test/users-list"} />;
    }

    return (
        <CreateNewUserPage
            isLoading={isLoading}
            error={error}
            handleOnSubmit={handleOnSubmit}
        />
    );
};

export default CreateNewUserPageContainer;
