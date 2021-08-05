import React from "react";
import Form from "../../components/form/Form";
import { NewUserType } from "../../services/user-api";

type UpdateUserPageType = {
    isLoading: boolean;
    error: string;
    handleOnSubmit: (data: NewUserType) => void;
    backHandler: () => void;
};

const UpdateUserPage: React.FC<UpdateUserPageType> = React.memo(
    ({ error, isLoading, handleOnSubmit, backHandler }) => {
        return (
            <Form
                formLabel={"Update user"}
                btnName={"Update"}
                isLoading={isLoading}
                error={error}
                handleOnSubmit={handleOnSubmit}
                backHandler={backHandler}
            />
        );
    }
);

export default UpdateUserPage;
