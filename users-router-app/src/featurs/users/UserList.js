import React, {useState} from "react";
import {UserItem} from "./UserItem";
import {userAPI} from "../../API/server";
import {useNavigate} from "react-router-dom";


export function UserList() {
    const [userList , setUserList] = useState([]);
    const navigate = useNavigate();


    React.useEffect(() => {
        userAPI.getList().then((newList)=>{
            setUserList(newList)
        })
    }, [userList]);

    return (
        <>
            <h1>Users List</h1>
            <button onClick={() =>navigate("/")}>Back</button>

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {userList.map(user =>
                    (<UserItem
                        key={user.id}
                        user={user}
                    />))}
                </tbody>
            </table>
        </>
    )
}