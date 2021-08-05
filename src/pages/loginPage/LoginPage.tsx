import { useFormik } from "formik";
import React from "react";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import classes from "./LoginPage.module.scss";

type RestorePropsType = {
    isLoggedSuccess: boolean;
    isLoading: boolean;
    error: string;
    handleOnSubmit: (username: string, password: string) => void;
};

type FormikErrorType = {
    username?: string;
    password?: string;
};

const LoginPage: React.FC<RestorePropsType> = React.memo(
    ({ error, isLoading, handleOnSubmit, isLoggedSuccess }) => {
        const formik = useFormik({
            initialValues: {
                username: "",
                password: "",
            },
            validate: (values) => {
                const errors: FormikErrorType = {};
                if (!values.username) {
                    errors.username = "Required!";
                } else if (!/^[\w.@+-]+$/i.test(values.username)) {
                    errors.username = "Invalid username!";
                } else if (values.username.length > 150) {
                    errors.username =
                        "Too much longer username, max 150 symbols!";
                }
                if (!values.password) {
                    errors.password = "Required!";
                } else if (
                    !/^(?=.*[A-Z])(?=.*\d).{8,}$/i.test(values.password)
                ) {
                    errors.password = "Invalid password!";
                } else if (values.password.length > 128) {
                    errors.password =
                        "Too much longer password, min 128 symbols";
                }
                return errors;
            },
            onSubmit: (values) => {
                handleOnSubmit(values.username.trim(), values.password);
            },
        });

        return (
            <div className={classes.login}>
                <div className={classes.login__container}>
                    <form
                        className={classes.login__form}
                        onSubmit={formik.handleSubmit}
                    >
                        <div className={classes.login__title}>
                            <h3>Login page</h3>
                        </div>
                        <div className={classes.login__inputs}>
                            <Input
                                label={"Username"}
                                placeholder={"Please, put your username"}
                                errorCondition={
                                    !!formik.errors.username &&
                                    formik.touched.username
                                }
                                errorText={formik.errors.username}
                                {...formik.getFieldProps("username")}
                            />
                            <Input
                                label={"Password"}
                                type={"password"}
                                placeholder={"Please, put your password"}
                                errorCondition={
                                    !!formik.errors.password &&
                                    formik.touched.password
                                }
                                errorText={formik.errors.password}
                                {...formik.getFieldProps("password")}
                            />
                        </div>
                        <div className={classes.login__buttons}>
                            <Button
                                type={"submit"}
                                btnName={"Login"}
                                disabled={
                                    !formik.isValid ||
                                    isLoading ||
                                    !formik.values.username
                                }
                                btnType={"green"}
                            />
                            <Button
                                btnName={"Reset"}
                                type={"reset"}
                                onClick={() => formik.resetForm()}
                            />
                        </div>
                        {error && (
                            <div className={classes.infoTextRed}>{error}</div>
                        )}
                        {isLoading && (
                            <div className={classes.loading}>...Loading</div>
                        )}
                    </form>
                </div>
            </div>
        );
    }
);

export default LoginPage;
