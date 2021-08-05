import { useFormik } from "formik";
import React from "react";
import classes from "./Form.module.scss";
import { NewUserType } from "../../services/user-api";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import NavItem from "../navItem/NavItem";

type FormPropsType = {
    formLabel: string;
    btnName: string;
    isLoading: boolean;
    error: string;
    handleOnSubmit: (data: NewUserType) => void;
    backHandler?: () => void;
};

type FormikErrorType = {
    username?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
};

const Form: React.FC<FormPropsType> = React.memo(
    ({ formLabel, btnName, error, isLoading, handleOnSubmit, backHandler }) => {
        const formik = useFormik({
            initialValues: {
                username: "",
                first_name: "",
                last_name: "",
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
                if (values.first_name.length > 30) {
                    errors.first_name =
                        "Too much longer first name, min 30 symbols";
                }
                if (values.last_name.length > 150) {
                    errors.last_name =
                        "Too much longer last name, min 150 symbols";
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
                handleOnSubmit({
                    username: values.username.trim(),
                    first_name: values.first_name,
                    last_name: values.last_name,
                    password: values.password,
                    is_active: true,
                });
            },
        });

        return (
            <div className={classes.block}>
                <div className={classes.block__container}>
                    <form
                        className={classes.block__form}
                        onSubmit={formik.handleSubmit}
                    >
                        <div className={classes.block__title}>
                            <h3>{formLabel}</h3>
                        </div>
                        <div className={classes.block__inputs}>
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
                                label={"First name"}
                                placeholder={"Please, put your first name"}
                                errorCondition={
                                    !!formik.errors.first_name &&
                                    formik.touched.first_name
                                }
                                errorText={formik.errors.first_name}
                                {...formik.getFieldProps("first_name")}
                            />
                            <Input
                                label={"Last name"}
                                placeholder={"Please, put your last name"}
                                errorCondition={
                                    !!formik.errors.last_name &&
                                    formik.touched.last_name
                                }
                                errorText={formik.errors.last_name}
                                {...formik.getFieldProps("last_name")}
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
                        <div className={classes.block__buttons}>
                            <Button
                                type={"submit"}
                                btnName={btnName}
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
                    <div className={classes.links} onClick={backHandler}>
                        <NavItem
                            path={"/emphasoft-test/users-list"}
                            title={"Back to users list"}
                        />
                    </div>
                </div>
            </div>
        );
    }
);

export default Form;
