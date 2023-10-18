import {waitersAPI} from "../../API/server";

import * as action from './reducer'
export const actionGetApiList = () => {
    return (dispatch) => {
        dispatch(action.getListLoading())
        waitersAPI.getList()
            .then((newList) => dispatch(action.getListSuccessfully(newList)))
            .catch((error) => dispatch(action.getListError(error.message)));
    }
}
export const saveItem = (waiter) => {
    return (dispatch) => {
        if (waiter.id) {
            waitersAPI.update(waiter.id, waiter)
                .then((updatedWaiter) => dispatch(action.updateItem(updatedWaiter)))
        } else {
            waitersAPI.create(waiter).then((newWaiter) => dispatch(action.createItem(newWaiter)))
        }
    }
}

export const actionRemoveItem = (id) => {
    return (dispatch) => {
        waitersAPI.delete(id).then(() => {
            dispatch(action.removeItem(id))
        })
    }
};