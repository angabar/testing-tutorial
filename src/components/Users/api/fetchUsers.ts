import axios from "axios";

export const fetchUsersFromServer = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
    );
    return response;
};
