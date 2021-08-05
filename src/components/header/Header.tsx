import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogoutUserData } from "../../store/reducers/auth-reducer";
import { RootStateType } from "../../store/store";
import { NavLogIn, NavLogOut } from "./nav/Nav";

const Header = () => {
    const dispatch = useDispatch();
    const token = useSelector<RootStateType, string>(
        (state) => state.auth.token
    );

    const logoutHandler = useCallback(() => {
        dispatch(setLogoutUserData());
        // eslint-disable-next-line
    }, []);

    if (!token) return <NavLogOut />;

    return <NavLogIn logout={logoutHandler} />;
};

export default Header;
