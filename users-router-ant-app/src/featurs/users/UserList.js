import React, {useState} from "react";
import {userAPI} from "../../API/server";
import {useNavigate} from "react-router-dom";
import {Button, Table} from "antd";
import {RollbackOutlined} from "@ant-design/icons";


export function UserList() {
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();


    React.useEffect(() => {
        userAPI.getList().then((newList) => {
            setUserList(newList)
        })
    }, [userList]);

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Actions",
            key: "actions",
            render: (text, record) => (
                <Button type="primary" onClick={() => navigate(`${record.id}/albums`)}>
                    View Albums
                </Button>
            ),
        },
    ];

    return (
        <>
            <h1>Users List</h1>
            <Button type="primary" danger onClick={() => navigate("/")}>
                Back <RollbackOutlined/>
            </Button>
            <Table
                columns={columns}
                dataSource={userList}
                rowKey="id"
                pagination={false}
            />
        </>
    );
}