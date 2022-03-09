// import React, {FC} from "react";
// import {IUser} from "../types/types";
//
// interface UserListProps {
//     user: IUser
// }
//
// const UserList: FC<UserListProps> = ({user}) => {
//     return (
//         <div style={{padding: "15px", border: "1px solid black"}}>
//             {user.id}, {`${user.name} mnuma es ${user.address.city} qaxaqum es ${user.address.street} poxocum`}
//         </div>
//     )
// }
// export default UserList
import React, {FC} from "react";
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user => {
                return <UserItem key={user.id} user={user}/>
            })}
        </div>
    )
}
export default UserList