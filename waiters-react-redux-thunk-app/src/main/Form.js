import React from "react";
import {useSelector} from "react-redux";

export function Form({ onWaitersSubmit}) {
    const [title, setTitle] = React.useState('');
    const waiter = useSelector(state => state.waiters.waiter)

    React.useEffect(() => {
        if (waiter) {
            setTitle(waiter.firstName);
        }
    }, [waiter])

    const onSubmit = (e) => {
        e.preventDefault();

        onWaitersSubmit({
           ...waiter,
            firstName: title,
        });

        setTitle("");
    }

    const onChange = (e => {setTitle(e.target.value)});

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input value={title} onChange={onChange} type="text" id="title"/>

            <button type="submit">Save</button>
        </form>
    );
}