import React from "react";
import {waitersAPI} from "../../API/server";
import {useDispatch, useSelector} from "react-redux";
import {
    actionSetList,
    actionEditList
} from "../store/actions";

export function useWaiters() {
    const dispatch = useDispatch();
    const waitersList = useSelector(state => state.waiters.waitersList)
    const waiter = useSelector(state => state.waiters.waiter)


    React.useEffect(() => {
        waitersAPI.getList().then((newList) =>
            dispatch(actionSetList(newList))
        );
    }, []);

    const onWaitersSubmit = (formWaiter) => {
        if (formWaiter.firstName.trim() === "") {
            alert("Field name can not be empty!");
            return;
        }

        if (formWaiter.id) {
            waitersAPI.update(formWaiter.id, formWaiter).then((updatedWaiter) => {
                const newList =
                    waitersList.map((waiter) => waiter.id === formWaiter.id ? updatedWaiter : waiter);

                dispatch(actionSetList(newList))

            })
        } else {
            waitersAPI.create(formWaiter).then((newWaiter) => {
                dispatch(actionSetList([...waitersList, newWaiter]))
            })
        }

    }

    const onWaiterBtnClick = (id) => {
        if (id) {
            const updateList = waitersList.filter((waiter) => waiter.id !== id);

            waitersAPI.delete(id).then(() => dispatch(actionSetList(updateList)));
        }
    }

    const onWaiterEdit = (editedWaiter) => {
        dispatch(actionEditList(editedWaiter))
    }

    return {
        waiter,
        waitersList,
        onWaitersSubmit,
        onWaiterBtnClick,
        onWaiterEdit,
    }
}