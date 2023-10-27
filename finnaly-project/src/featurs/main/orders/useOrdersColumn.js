import {Button, Space} from "antd";
import {actionRemoveOrder} from "./store/thunk";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {editItem} from "./store/reducer";

export function useOrderColumns() {
    const dispatch = useDispatch()
    return [
        {
            title: 'Table',
            dataIndex: 'numberTable',
            key: 'numberTable',
        },
        {
            title: 'Waiter',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Dishes',
            key: 'matchingDishes',
            render: (text, record) => (
                <div>
                    {record.matchingDishes.map((dish, index) => (
                        <div key={index}>
                            <div>Name: {dish.name}</div>
                            <div>
                                Price: {dish.price} |
                                Count: {dish.count} |
                                Total: {dish.total}
                            </div>
                        </div>
                    ))}
                </div>
            ),
        },
        {
            title: 'Table',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Link to={`/orders/edit/${record.id}`}>
                        <Button
                            type='primary'
                            onClick={() => {
                                dispatch(editItem(record))
                            }}>
                            Edit
                        </Button>
                    </Link>
                    <Button type="primary" danger onClick={() => dispatch(actionRemoveOrder(record.id))}>Delete</Button>
                </Space>
            ),
        },
    ]
}