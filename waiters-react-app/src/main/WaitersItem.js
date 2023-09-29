export function WaiterItem({waiter}) {
    return (
        <tr>
            <td>{waiter.firstName}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}