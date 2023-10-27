import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { actionGetApiList } from "./store/thunk";
import { Page } from "../../pages/Page";
import { Alert, Input, Space} from "antd";
import { useTablesColumns } from "./useTablesColumns";
import {AddButton} from "../componets/AddButton";
import {CustomTable} from "../componets/Table";
import { SearchOutlined } from "@ant-design/icons";

export function TablesList() {
    const dispatch = useDispatch();
    const columns = useTablesColumns();
    const tablesList = useSelector((state) => state.tables.tableList);
    const tablesListLoading = useSelector((state) => state.tables.listLoading);
    const tablesListError = useSelector((state) => state.tables.listError);
    const [searchTableNumber, setSearchTableNumber] = useState("");
    const [filteredTable, setFilteredTable] = useState([]);

    React.useEffect(() => {
        dispatch(actionGetApiList());
    }, []);

    React.useEffect(() => {
        const filteredList = tablesList.filter((table) =>
            table.number.toString().includes(searchTableNumber)
        );
        setFilteredTable(filteredList);
    }, [searchTableNumber, tablesList]);

    const onChange = (e) => {
        setSearchTableNumber(e.target.value);
    };

    return (
        <Page title="Tables">
            <Space>
                <AddButton path="/tables/edit" />
                <Input
                    onChange={onChange}
                    placeholder="table number"
                    style={{ width: "60%" }}
                    prefix={<SearchOutlined />}
                />
            </Space>
            <CustomTable
                loading={tablesListLoading}
                columns={columns}
                dataSource={filteredTable}
                rowKey="id"
                pagination={{ pageSize: 5 }}
            />

            {tablesListError && (
                <Alert message={tablesListError} type="error" />
            )}
        </Page>
    );
}
