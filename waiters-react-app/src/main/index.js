import React from "react";
import {Form} from "./Form";
import {WaiterList} from "./WaitersList";
import {useWaiters} from "./hooks/useWaiters";

export function WaitersApp() {
    const {waiter, onWaitersSubmit,waiterList, onWaiterBtnClick, onWaiterEdit} = useWaiters();

    return (
        <>
            <Form
                waiter={waiter}
                onWaitersSubmit={onWaitersSubmit}
            />
            <WaiterList
                waiterList={waiterList}
                onWaiterBtnClick={onWaiterBtnClick}
                onWaiterEdit={onWaiterEdit}
            />
        </>
    );
}