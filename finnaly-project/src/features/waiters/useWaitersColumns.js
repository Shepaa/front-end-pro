import {useDispatch} from "react-redux";
import {Button, Space} from "antd";
import {actionRemoveWaiter} from "./store/thunk";
import {editItem} from "./store/reducer";
import {Link} from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

export function useWaitersColumns() {
    const dispatch = useDispatch()

    return [
        {
            title: 'Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/waiters/edit/${record.id}`}>
                        <Button
                            type='primary'
                            onClick={() => {
                                dispatch(editItem(record))
                            }}>
                            Edit
                            <EditOutlined />
                        </Button>
                    </Link>
                    <Button
                        type="primary"
                        danger onClick={() =>
                        dispatch(actionRemoveWaiter(record.id))}
                    >
                        Delete
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },
    ]
}