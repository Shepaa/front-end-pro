import {useDispatch} from "react-redux";
import {Button, Space} from "antd";
import {Link} from "react-router-dom";
import {actionRemoveDish} from "./store/thunk";
import {editItem} from "./store/reducer";


export function useDishesColumn() {
    const dispatch = useDispatch()

    return [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/dishes/edit/${record.id}`}>
                        <Button
                            type='primary'
                            onClick={() => {
                                dispatch(editItem(record))
                            }}>
                            Edit
                        </Button>
                    </Link>
                    <Button type="primary" danger onClick={() => dispatch(actionRemoveDish(record.id))}>Delete</Button>
                </Space>
            ),
        },
    ]
}