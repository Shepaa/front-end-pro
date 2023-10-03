import React from "react";
import {WaiterItem} from "./WaitersItem";
import {useDispatch, useSelector} from "react-redux";
import {waitersAPI} from "../API/server";
import {actionSetList} from "./store/actions";

export function WaiterList() {
    const dispatch = useDispatch();
    const waitersList = useSelector(state => state.waiters.waitersList)


    React.useEffect(() => {
        waitersAPI.getList().then((newList) =>
            dispatch(actionSetList(newList))
        );
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {waitersList.map(waiter =>
                (<WaiterItem
                    key={waiter.id}
                    waiter={waiter}
                />))}
            </tbody>
        </table>
    )
}