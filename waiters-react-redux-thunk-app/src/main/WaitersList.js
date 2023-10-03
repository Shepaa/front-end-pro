import React from "react";
import {WaiterItem} from "./WaitersItem";

export function WaiterList({waiterList, onWaiterBtnClick}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {waiterList.map(waiter =>
                (<WaiterItem
                    key={waiter.id}
                    waiter={waiter}
                    onWaiterDeleteBtnClick={onWaiterBtnClick}
                />))}
            </tbody>
        </table>
    )
}