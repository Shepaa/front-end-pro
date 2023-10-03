import {actionEditItem} from "./store/actions";
import {useDispatch} from "react-redux";

export function WaiterItem({waiter, onWaiterDeleteBtnClick}) {
    const dispatch = useDispatch()

    const onWaiterEdit = () => {
        dispatch(actionEditItem(waiter))
    }

    return (
        <tr>
            <td>{waiter.firstName}</td>
            <td>
                <button onClick={() => onWaiterEdit}>Edit</button>
                <button onClick={() => onWaiterDeleteBtnClick(waiter.id)}>Delete</button>
            </td>
        </tr>
    );
}