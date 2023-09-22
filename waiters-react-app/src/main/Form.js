import React from "react";

export function Form({onWaitersSubmit}) {

    const [title, setTitle] = React.useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(title)
        onWaitersSubmit({
            firstName: title
        });
    }

    const onChange = (e => {
        setTitle(e.target.value)
    })


    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input value={title} onChange={onChange} type="text" id="title"/>

            <button type="submit">Save</button>
        </form>
    )
}