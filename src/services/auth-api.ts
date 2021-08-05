import axios from "axios";

const instance = axios.create({
    baseURL: "https://emphasoft-test-assignment.herokuapp.com/",
});

export const authAPI = {
    logInUserInApp(data: TokenRequestType) {
        return instance.post<{ token: string }>("api-token-auth/", data);
    },
};

export type TokenRequestType = {
    username: string;
    password: string;
};

export type RequestRegisterType = {
    email: string;
    password: string;
};

export type RequestLogInType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export type RequestNewPasswordType = {
    password: string;
    resetPasswordToken: string;
};

export type RequestResetPasswordType = {
    email: string;
    from: string;
    message: string;
};

export type UserDataType = {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
    is_active: boolean;
};
