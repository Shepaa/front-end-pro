import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {waitersAPI} from "../API/server";
import {actionCreateItem, actionUpdateItem, saveItem} from "./store/actions";

export function Form() {
    const waiter = useSelector(state => state.waiters.waiter)
    const [title, setTitle] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (waiter) {
            setTitle(waiter.firstName);
            setPhone(waiter.phone)
        }
    }, [waiter])

    const onSubmit = (e) => {
        e.preventDefault()

        const formWaiter = {
            ...waiter,
            firstName: title,
            phone
        }
        if (formWaiter.firstName.trim() === "") {
            alert("Name field cannot be empty!");
            return;
        }else if (!formWaiter.phone) {
            alert("Phone field cannot be empty!");
            return;
        }



        dispatch(saveItem(formWaiter))
        setTitle("")
        setPhone("")
    }

    const onNameChange = (e => {
        setTitle(e.target.value)
    });

    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input value={title} onChange={onNameChange} type="text" id="title"/>

            <label htmlFor="phone">Phone</label>
            <input value={phone} onChange={onPhoneChange} type="text" id="phone"/>
            <button type="submit">Save</button>
        </form>
    );
}