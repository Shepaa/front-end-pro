import React from "react";
import {Form} from "./Form";
import {WaiterList} from "./WaitersList";
import {waitersAPI} from "../API/server";

export function WaitersApp() {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        waitersAPI.getList().then(data => {
            setData(data)
        })
    }, [])

    const onWaitersSubmit = (newWaiter) => {
        setData([...data, newWaiter])

    }

    return (
        <>
            <Form onWaitersSubmit={onWaitersSubmit}/>
            <WaiterList waiterList={data}/>
        </>
    )
}