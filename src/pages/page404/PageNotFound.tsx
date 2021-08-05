import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { RootStateType } from "../../store/store";
import classes from "./PageNotFound.module.scss";

export const PageNotFound = () => {
    const isLoggedSuccess = useSelector<RootStateType, boolean>(
        (state) => state.auth.isLoggedSuccess
    );
    const history = useHistory();

    const buttonHandler = () => {
        if (isLoggedSuccess) {
            history.push("emphasoft-test/users-list");
        } else {
            history.push("emphasoft-test/login");
        }
    };

    return (
        <div className={classes.wrap}>
            <h2 className={classes.title}>404</h2>
            <h3 className={classes.subtitle}>Sorry, the page not found...</h3>
            <Button
                btnName={"Go back"}
                btnType={"green"}
                onClick={buttonHandler}
            />
        </div>
    );
};
