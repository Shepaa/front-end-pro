import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {photosAPI} from "../../API/server";
import {PhotosItem} from "./PhotosItem";
import {Button} from "antd";
import {RollbackOutlined} from "@ant-design/icons";

export function PhotosList() {
    const [photoList, setPhotoList] = useState([])
    const {albumId} = useParams();
    const navigate = useNavigate();


    React.useEffect(() => {
        photosAPI.getList().then((newList) => {
            const filteredPhotos = newList.filter((photo) => photo.albumId === Number(albumId));
            setPhotoList(filteredPhotos);
        });
    }, [albumId]);

    return (
        <>
            <h1>Albums</h1>
            <Button type="primary"
                    danger
                    onClick={() => navigate(`/user/${albumId}/albums`)}
            >
                Back  <RollbackOutlined />
            </Button>

            <table>
                <tbody>
                {photoList.map(photos => (
                    <PhotosItem key={photos.id} photos={photos}/>
                ))}
                </tbody>
            </table>
        </>

    )
}