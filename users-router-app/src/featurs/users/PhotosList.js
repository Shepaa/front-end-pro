import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {photosAPI} from "../../API/server";
import {PhotosItem} from "./PhotosItem";

export function PhotosList() {
    const [photoList, setPhotoList] = useState([])
    const {albumId} = useParams();

    React.useEffect(() => {
        photosAPI.getList().then((newList) => {
            const filteredPhotos = newList.filter((photo) => photo.albumId === Number(albumId));
            setPhotoList(filteredPhotos);
        });
    }, [albumId]);

    return (
        <>
            <h1>Albums</h1>
            <button onClick={() => window.history.back()}>Back</button>

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