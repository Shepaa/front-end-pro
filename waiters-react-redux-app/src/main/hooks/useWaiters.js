import React from "react";
import {waitersAPI} from "../../API/server";
import {useDispatch, useSelector} from "react-redux";
import {actionSetList} from "../store/actions";

export function useWaiters() {
    const dispatch = useDispatch();
    const waitersList = useSelector(state => state.waiters.waitersList)
    const [waiter, setWaiter] = React.useState(undefined);
    const [, setWaitersList] = React.useState([]);


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

                setWaitersList(newList)
                setWaiter(undefined);

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

            waitersAPI.delete(id).then(() => setWaitersList(updateList));
        }
    }

    const onWaiterEdit = (editedWaiter) => {
        setWaiter(editedWaiter);
    }

    return {
        waiter,
        waitersList,
        onWaitersSubmit,
        onWaiterBtnClick,
        onWaiterEdit,
    }
}