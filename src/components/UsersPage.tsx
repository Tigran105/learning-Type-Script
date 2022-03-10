import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import {useNavigate} from "react-router-dom";

const UsersPage = () => {
    const history = useNavigate()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={users}
            renderItems={(user: IUser) => <UserItem onClick={() => history("/users/" +user.id)} user={user} key={user.id}/>}
        />
    );
};

export default UsersPage;