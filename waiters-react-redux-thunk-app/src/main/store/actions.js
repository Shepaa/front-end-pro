import {waitersAPI} from "../../API/server";

export const ACTION_WAITERS_SET_LIST = "WAITERS_SET-LIST"
export const ACTION_WAITER_SET_EDIT_ITEM = 'WAITER_SET_EDIT_ITEM';
export const ACTION_WAITER_REMOVE_ITEM = 'WAITER_REMOVE_ITEM';
export const ACTION_WAITER_CREATE_ITEM = 'WAITER_CREATE_ITEM';
export const ACTION_WAITER_UPDATE_ITEM = 'WAITER_UPDATE_ITEM';


export const actionSetList = (list) => ({type: ACTION_WAITERS_SET_LIST, payload: list});
export const actionEditItem = (waiter) => ({type: ACTION_WAITER_SET_EDIT_ITEM, payload: waiter});
// export const actionRemoveItem = (id) => ({type: ACTION_WAITER_REMOVE_ITEM, payload: id});
export const actionRemoveItem = (id) => {
    return (dispath) => {
        waitersAPI.delete(id).then(() => {
            dispath({type: ACTION_WAITER_REMOVE_ITEM, payload: id})
        })
    }
};
export const actionCreateItem = (waiter) => ({type: ACTION_WAITER_CREATE_ITEM, payload: waiter});
export const actionUpdateItem = (waiter) => ({type: ACTION_WAITER_UPDATE_ITEM, payload: waiter});

export const saveItem = (waiter) => {
    return (dispatch) => {
        if (waiter.id) {
            waitersAPI.update(waiter.id, waiter)
                .then((updatedWaiter) => dispatch(actionUpdateItem(updatedWaiter)))
        } else {
            waitersAPI.create(waiter).then((newWaiter) => dispatch(actionCreateItem(newWaiter)))
        }
    }
}




