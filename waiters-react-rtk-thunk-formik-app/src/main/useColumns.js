import {useDispatch} from "react-redux";
import {Button, Space} from "antd";
import {actionRemoveItem} from "./store/thunk";
import {editItem} from "./store/reducer";

export function useColumns(){
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
                    <Button type='primary' onClick={()=>{ dispatch(editItem(record))}} >Edit</Button>
                    <Button type='primary' onClick={() => dispatch(actionRemoveItem(record.id))}>Delete</Button>
                </Space>
            ),
        },
    ]
}