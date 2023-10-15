import {Button} from "antd";
import {Link} from "react-router-dom";

export function BasePage() {
    return (
        <Link to={'/user'}>
            <Button type="primary">
                Users here
            </Button>
        </Link>
    )
}