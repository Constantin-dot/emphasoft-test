import { Route, Switch } from "react-router-dom";
import CreateNewUserPageContainer from "../../pages/createNewUserPage/CreateNewUserPageContainer";
import LoginPageContainer from "../../pages/loginPage/LoginPageContainer";
import { PageNotFound } from "../../pages/page404/PageNotFound";
import UpdateUserPageContainer from "../../pages/updateUserPage/UpdateUserPageContainer";
import UsersListPageContainer from "../../pages/usersList/UsersListPageContainer";

const Routes = () => {
    return (
        <Switch>
            <Route
                path={"/emphasoft-test/update-user"}
                render={() => <UpdateUserPageContainer />}
            />
            <Route
                path={"/emphasoft-test/create-new-user"}
                render={() => <CreateNewUserPageContainer />}
            />
            <Route
                path={"/emphasoft-test/users-list"}
                render={() => <UsersListPageContainer />}
            />
            <Route
                path={"/emphasoft-test/login"}
                render={() => <LoginPageContainer />}
            />
            <Route
                exact
                path={"/emphasoft-test/"}
                render={() => <LoginPageContainer />}
            />
            <Route path={"*"} render={() => <PageNotFound />} />
        </Switch>
    );
};

export default Routes;
