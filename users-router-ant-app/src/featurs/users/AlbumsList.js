import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {albumAPI} from "../../API/server";
import {Button, Table} from "antd";
import {RollbackOutlined} from "@ant-design/icons";

export function AlbumsList() {
    const {userId} = useParams();
    const navigate = useNavigate();
    const [albumList, setAlbumList] = useState([])
    const filteredAlbums = albumList.filter(album => album.userId === Number(userId));
    React.useEffect(() => {
        albumAPI.getList().then((newList) => {
            setAlbumList((newList))
        })
    }, [albumList]);


    const columns = [
        {
            title: "title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Actions",
            key: "actions",
            render: (text, record) => (
                <Link to={`/user/${record.userId}/albums/${record.id}/photos`}>
                    <Button type="primary">
                        View photos
                    </Button>
                </Link>

            ),
        },
    ];


    return (
        <>
            <h1>Albums</h1>
            <Button type="primary" danger onClick={() => navigate(`/user`)}>
                Back <RollbackOutlined/>
            </Button>
            <Table
                columns={columns}
                dataSource={filteredAlbums}
                rowKey="id"
                pagination={false}
            />
        </>
    )
}