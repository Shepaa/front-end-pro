export function WaiterItem({waiter, onWaiterDeleteBtnClick, onWaiterEditBtnClick}) {
    return (
        <tr>
            <td>{waiter.firstName}</td>
            <td>
                <button onClick={() => onWaiterEditBtnClick(waiter)}>Edit</button>
                <button onClick={() => onWaiterDeleteBtnClick(waiter.id)}>Delete</button>
            </td>
        </tr>
    );
}