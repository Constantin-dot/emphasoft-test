import { Button } from "../../button/Button";
import NavItem from "../../navItem/NavItem";
import classes from "./Nav.module.scss";

export const NavLogOut = () => {
    return (
        <nav className={classes.logOut}>
            <div className={classes.title}>
                <h2>Emphasoft test</h2>
            </div>
        </nav>
    );
};

type NavLogInPropsType = {
    logout: () => void;
};

export const NavLogIn = ({ logout }: NavLogInPropsType) => {
    return (
        <nav className={classes.logIn}>
            <div className={classes.title}>
                <h2>Emphasoft test</h2>
            </div>
            <div className={classes.links}>
                <NavItem
                    path={"/emphasoft-test/create-new-user"}
                    title={"Create new user"}
                />
                {/* <NavItem path={"/packs"} title={"Packs"} /> */}
            </div>
            <div className={classes.button}>
                <Button onClick={logout} btnName={"Logout"} btnType={"red"} />
            </div>
        </nav>
    );
};
