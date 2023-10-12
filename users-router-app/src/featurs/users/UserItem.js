import {Link} from "react-router-dom";

export function UserItem({user}) {
    return (
        <tr>
            <td style={{border: `1px solid black`, textAlign: 'center'}}>
                {user.name}
            </td>
            <td>
                <Link to={`${user.id}/albums`}>
                    <button>View Albums</button>
                </Link>
            </td>
        </tr>
    );
}