import {Link} from "react-router-dom";

export function AlbumsItem({album}) {

    return (
        <tr>
            <td style={{border: `1px solid black`, textAlign: 'center'}}> {album.title}</td>
            <td>
                <Link to={`/user/${album.userId}/albums/${album.id}/photos`}>
                    <button>View photos</button>
                </Link>
            </td>
        </tr>
    );
}