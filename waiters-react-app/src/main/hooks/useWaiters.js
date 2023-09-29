import React from "react";
import {waitersAPI} from "../../API/server";

export function useWaiters() {
    const [waiter, setWaiter] = React.useState(undefined);
    const [waitersList, setWaitersList] = React.useState([]);


    React.useEffect(() => {
        waitersAPI.getList().then(data => {
            setWaitersList(data);
        })
    }, [])

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
                setWaitersList([...waitersList, newWaiter])
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