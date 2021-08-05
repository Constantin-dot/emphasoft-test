import React from "react";
import Form from "../../components/form/Form";
import { NewUserType } from "../../services/user-api";

type CreateNewUserPageType = {
    isLoading: boolean;
    error: string;
    handleOnSubmit: (data: NewUserType) => void;
};

const CreateNewUserPage: React.FC<CreateNewUserPageType> = React.memo(
    ({ error, isLoading, handleOnSubmit }) => {
        return (
            <Form
                formLabel={"Create new user"}
                btnName={"Create"}
                isLoading={isLoading}
                error={error}
                handleOnSubmit={handleOnSubmit}
            />
        );
    }
);

export default CreateNewUserPage;
