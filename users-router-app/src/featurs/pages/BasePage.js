import {Link} from "react-router-dom";

export function BasePage() {
    return (
        <Link to={'/user'}><button>Users here</button></Link>
    )
}