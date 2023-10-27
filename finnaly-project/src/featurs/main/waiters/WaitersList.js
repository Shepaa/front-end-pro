import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetWaitersList } from "./store/thunk";
import { Alert, Input} from "antd";
import { useWaitersColumns } from "./useWaitersColumns";
import { Page } from "../../pages/Page";
import { SearchOutlined } from "@ant-design/icons";
import {AddButton} from "../componets/AddButton";
import {CustomTable} from "../componets/Table";

export function WaiterList() {
    const dispatch = useDispatch();
    const columns = useWaitersColumns();
    const waitersList = useSelector((state) => state.waiters.waitersList);
    const waitersListLoading = useSelector((state) => state.waiters.listLoading);
    const waitersListError = useSelector((state) => state.waiters.listError);
    const [searchName, setSearchName] = useState("");
    const [filteredWaiters, setFilteredWaiters] = useState([]);

    useEffect(() => {
        dispatch(actionGetWaitersList());
    }, []);

    useEffect(() => {
        const filteredList = waitersList.filter((waiter) =>
            waiter.firstName.includes(searchName)
        );
        setFilteredWaiters(filteredList);
    }, [searchName, waitersList]);

    const onChange = (e) => {
        setSearchName(e.target.value);
    };

    return (
        <Page title="Waiter List">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Input
                    onChange={onChange}
                    placeholder="Search by waiter name"
                    style={{ width: "60%" }}
                    prefix={<SearchOutlined />}
                />
              <AddButton path='/waiters/edit'/>
            </div>
            <CustomTable
                loading={waitersListLoading}
                columns={columns}
                dataSource={filteredWaiters}
                rowKey="id"
                pagination={false}
            />
            {filteredWaiters.length === 0 && <Alert message="No waiters found" type="info" />}
            {waitersListError && <Alert message={waitersListError} type="error" />}
        </Page>
    );
}
