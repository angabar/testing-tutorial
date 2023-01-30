import React from "react";

import "./styles.css";

export type userPropsType = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const User = ({ id, name, username, email }: userPropsType) => {
    return (
        <div
            className="user__main-container"
            data-testid="user__main-container"
        >
            <div className="user__main-data">
                <span>{id}: </span>
                <span>{name}</span>
                <span>{username}</span>
            </div>
            <span className="user__email">{email}</span>
        </div>
    );
};

export default User;
