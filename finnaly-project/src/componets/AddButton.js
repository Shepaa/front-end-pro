import {Button} from "antd";
import {Link} from "react-router-dom";
import React from "react";

export function AddButton({path}) {
    return (
        <Link to={path}>
            <Button type="primary">Add New</Button>
        </Link>
    )
}