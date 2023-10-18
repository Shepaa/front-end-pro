import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionGetApiList} from "./store/thunk";
import {Alert, Table} from "antd";
import {useColumns} from "./useColumns";

export function WaiterList() {
    const dispatch = useDispatch();
    const columns = useColumns();
    const waitersList = useSelector(state => state.waiters.waitersList);
    const waitersListLoading = useSelector(state => state.waiters.listLoading);
    const waitersListError = useSelector(state => state.waiters.listError);


    React.useEffect(() => {
        dispatch(actionGetApiList())
    }, []);


    return (<>
        <Table
            loading={waitersListLoading}
            columns={columns}
            dataSource={waitersList}
            rowKey='id'
            pagination={false}/>


            {waitersListError && <Alert message={waitersListError} type="error" />}
</>
    )
}