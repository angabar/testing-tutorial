import React, { useState, useEffect } from "react";
import axios from "axios";
import User, { userPropsType } from "../User";

const Users = () => {
    const [users, setUsers] = useState({
        loading: false,
        data: [],
    });

    const fetchUsers = async () => {
        setUsers({
            ...users,
            loading: true,
        });

        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
        );

        setUsers({
            loading: false,
            data: response.data,
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const renderUsers = () => {
        if (users.loading) {
            return <div>Loading...</div>;
        }

        if (!users.loading && users.data.length === 0) {
            return <div>There are no users</div>;
        }

        if (!users.loading && users.data.length > 0) {
            return users.data.map((singleUser: userPropsType) => {
                return (
                    <User
                        key={singleUser.id}
                        id={singleUser.id}
                        name={singleUser.name}
                        username={singleUser.username}
                        email={singleUser.email}
                    />
                );
            });
        }

        return null;
    };

    return <div>{renderUsers()}</div>;
};

export default Users;
