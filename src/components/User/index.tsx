import React from "react";

export type userPropsType = {
    id: number;
    name: string;
    username: string;
    email: string;
};

const User = ({ id, name, username, email }: userPropsType) => {
    return <div>{id}</div>;
};

export default User;
