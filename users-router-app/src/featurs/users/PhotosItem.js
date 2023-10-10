export function PhotosItem({photos}) {
    console.log(photos.albumId)
    return (

            <tr>
                <td><img src={`${photos.thumbnailUrl}`} alt=""/></td>
            </tr>
    );
}