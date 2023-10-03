import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {waitersAPI} from "../API/server";
import {actionCreateItem, actionUpdateItem, saveItem} from "./store/actions";

export function Form() {
    const [title, setTitle] = React.useState('');
    const waiter = useSelector(state => state.waiters.waiter)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (waiter) {
            setTitle(waiter.firstName);
        }
    }, [waiter])

    const onSubmit = (e) => {
        e.preventDefault()

        const formWaiter = {
            ...waiter,
            firstName: title,
        }

        if (formWaiter.firstName.trim() === "") {
            alert("Field name can not be empty!");
            return;
        }

        dispatch(saveItem(formWaiter))
        setTitle("")
    }

    const onChange = (e => {
        setTitle(e.target.value)
    });

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input value={title} onChange={onChange} type="text" id="title"/>

            <button type="submit">Save</button>
        </form>
    );
}