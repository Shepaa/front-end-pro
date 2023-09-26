import React from "react";
import {Form} from "./Form";
import {WaiterList} from "./WaitersList";
import {useWaiters} from "./hooks/useWaiters";

export function WaitersApp() {
    const {waiter, onWaitersSubmit,waitersList, onWaiterBtnClick, onWaiterEdit} = useWaiters();

    return (
        <>
            <Form
                waiter={waiter}
                onWaitersSubmit={onWaitersSubmit}
            />
            <WaiterList
                waiterList={waitersList}
                onWaiterBtnClick={onWaiterBtnClick}
                onWaiterEdit={onWaiterEdit}
            />
        </>
    );
}