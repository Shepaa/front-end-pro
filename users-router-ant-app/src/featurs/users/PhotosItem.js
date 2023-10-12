import {Image} from 'antd'

export function PhotosItem({photos}) {
    console.log(photos.albumId)
    return (
        <tr>
            <td>
                <Image width={200} src={`${photos.thumbnailUrl}`}/>
            </td>
        </tr>
    );
}