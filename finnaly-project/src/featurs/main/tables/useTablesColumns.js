import {Button, Space} from "antd";
import {Link} from "react-router-dom";
import {editItem} from "./store/reducer";
import {actionRemoveItem} from "./store/thunk";
import {useDispatch} from "react-redux";

export function useTablesColumns() {
    const dispatch = useDispatch()

    return [
        {
            title: 'number',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/tables/edit/${record.id}`}>
                        <Button
                            type='primary'
                            onClick={() => {
                                dispatch(editItem(record))
                            }}>
                            Edit
                        </Button>
                    </Link>
                    <Button type="primary" danger onClick={() => dispatch(actionRemoveItem(record.id))}>Delete</Button>
                </Space>
            ),
        },
    ]
}