import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {actionGetApiList} from "./store/thunk";
import {Page} from "../../pages/Page";
import {Alert,Table} from "antd";
import {useTablesColumns} from "./useTablesColumns";
import {AddButton} from "../componets/AddButton";

export function TablesList() {
    const dispatch = useDispatch();
    const columns = useTablesColumns();
    const tablesList = useSelector(state => state.tables.tableList)
    const tablesListLoading = useSelector(state => state.tables.listLoading);
    const tablesListError = useSelector(state => state.tables.listError);


    React.useEffect(() => {
        dispatch(actionGetApiList())
    }, []);

    return (
        <Page title="Tables">
            <AddButton path='/tables/edit'/>
            <Table
                loading={tablesListLoading}
                columns={columns}
                dataSource={tablesList}
                rowKey='id'
                pagination={{pageSize: 5}}/>


            {tablesListError && <Alert message={tablesListError} type="error"/>}
        </Page>
    )
}