import { Button } from "../../components/button/Button";
import { ListUserType } from "../../services/user-api";
import classes from "./UsersListPage.module.scss";

type PropsType = {
    allUsers: Array<ListUserType>;
    isLoading: boolean;
    error: string;
    updateUserHandler: (userId: number) => void;
};

const UsersListPage: React.FC<PropsType> = ({
    allUsers,
    isLoading,
    error,
    updateUserHandler,
}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.usersList}>
                <h3>Users list page</h3>
                {error ? (
                    <div className={classes.infoTextRed}>{error}</div>
                ) : (
                    allUsers.map((u) => (
                        <div key={u.id} className={classes.userCard}>
                            <div className={classes.infoBlock}>
                                <div>First name: {u.first_name}</div>
                                <div>Last name: {u.last_name}</div>
                                <div>Username: {u.username}</div>
                                <div>Last login: {u.last_login}</div>
                                <div>Is active: {u.is_active?.toString()}</div>
                                <div>
                                    Is superuser: {u.is_superuser?.toString()}
                                </div>
                            </div>
                            <Button
                                btnName={"Update"}
                                btnType={"green"}
                                onClick={() => {
                                    updateUserHandler(u.id);
                                }}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default UsersListPage;
