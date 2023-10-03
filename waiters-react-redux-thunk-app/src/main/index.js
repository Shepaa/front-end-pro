import React from "react";
import {Form} from "./Form";
import {WaiterList} from "./WaitersList";
import {useWaiters} from "./hooks/useWaiters";

export function WaitersApp() {
    const {onWaitersSubmit, waitersList, onWaiterBtnClick} = useWaiters();

    return (
        <>
            <Form
                onWaitersSubmit={onWaitersSubmit}
            />
            <WaiterList
                waiterList={waitersList}
                onWaiterBtnClick={onWaiterBtnClick}
            />
        </>
    );
}