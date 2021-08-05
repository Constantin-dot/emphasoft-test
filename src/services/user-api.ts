import axios from "axios";

const instance = axios.create({
    baseURL: "https://emphasoft-test-assignment.herokuapp.com/",
});

export const userAPI = {
    fetchUsers(token: string) {
        return instance.get<Array<ListUserType>>("api/v1/users/", {
            headers: { Authorization: `Token ${token}` },
        });
    },
    createNewUser(token: string, data: NewUserType) {
        return instance.post<ListUserType>("api/v1/users/", data, {
            headers: { Authorization: `Token ${token}` },
        });
    },
    updateUser(token: string, id: number | null, data: NewUserType) {
        return instance.put<ListUserType>(`api/v1/users/${id}/`, data, {
            headers: { Authorization: `Token ${token}` },
        });
    },
};

export type ListUserType = {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    last_login: string | null;
    is_superuser: boolean;
};

export type NewUserType = {
    username: string;
    first_name?: string;
    last_name?: string;
    password: string;
    is_active: boolean;
};
