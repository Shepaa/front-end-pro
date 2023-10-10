import React, {useState} from "react";
import {AlbumsItem} from "./AlbumsItem";
import {useParams} from "react-router-dom";
import {albumAPI} from "../../API/server";

export function AlbumsList() {
    const [albumList, setAlbumList] = useState([])
    const {userId} = useParams();
    const filteredAlbums = albumList.filter(album => album.userId === Number(userId));

    React.useEffect(() => {
        albumAPI.getList().then((newList) => {
            setAlbumList((newList))
        })
    }, [albumList]);


    return (
        <>
            <h1>Albums</h1>
            <button onClick={() => window.history.back()}>Back</button>

            <table>
                <tbody>
                {filteredAlbums.map(album => (
                    <AlbumsItem key={album.id} album={album}/>
                ))}
                </tbody>
            </table>
        </>
    )
}