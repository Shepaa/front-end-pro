import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {photosAPI} from "../../API/server";
import {PhotosItem} from "./PhotosItem";

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
            <button onClick={() => navigate(`/user/${albumId}/albums`)}>Back</button>

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