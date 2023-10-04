import {actionEditItem, actionRemoveItem} from "./store/actions";
import {useDispatch} from "react-redux";
import {waitersAPI} from "../API/server";

export function WaiterItem({waiter}) {
    const dispatch = useDispatch()

    const onWaiterEdit = () => {
        dispatch(actionEditItem(waiter))
    }

    const onWaiterDeleteBtnClick = (id) => {
        if (id) {
            dispatch(actionRemoveItem(waiter.id));
        }
    }

    return (
        <tr>
            <td>{waiter.firstName}</td>
            <td>{waiter.phone}</td>
            <td>
                <button onClick={onWaiterEdit}>Edit</button>
                <button onClick={onWaiterDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    );
}