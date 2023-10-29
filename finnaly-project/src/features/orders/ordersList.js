import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {actionGetOrdersList} from "./store/thunk";
import {actionGetWaitersList} from "../waiters/store/thunk";
import {actionGetApiList} from "../tables/store/thunk";
import {actionGetDishesList} from "../dishes/store/thunk";
import {Alert} from "antd";
import {useOrderColumns} from "./useOrdersColumn";
import {processOrders} from "./utilites/orderUtils";
import {CustomTable} from "../../componets/Table";
import {AddButton} from "../../componets/AddButton";


export function OrdersList() {
    const dispatch = useDispatch();
    const columns = useOrderColumns()
    const ordersListLoading = useSelector(state => state.orders.ordersListLoading);
    const ordersListError = useSelector(state => state.orders.ordersListError);
    const ordersList = useSelector(state => state.orders.ordersList);
    const tablesList = useSelector(state => state.tables.tableList)
    const waitersList = useSelector(state => state.waiters.waitersList);
    const dishesList = useSelector(state => state.dishes.dishesList);
    const processedOrders = processOrders(ordersList, waitersList, tablesList, dishesList);


    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(actionGetApiList());
                await dispatch(actionGetWaitersList());
                await dispatch(actionGetDishesList());
                await dispatch(actionGetOrdersList());
            } catch (e) {
                alert("Can not dispatch data")
            }

        };

        fetchData();
    }, []);

    return (
        <>
            <AddButton path='/orders/edit'/>
            <CustomTable
                loadingData={ordersListLoading}
                columns={columns}
                dataSource={processedOrders}
                pagination={{pageSize: 2}}
            />
            {ordersListError && <Alert message={ordersListError} type="error"/>}
        </>
    )
}