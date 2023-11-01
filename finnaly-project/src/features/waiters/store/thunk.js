import {waitersAPI} from "../../../API/server";

import * as action from './reducer'
export const actionGetWaitersList = () => {
    return (dispatch) => {
        dispatch(action.getListLoading())
        waitersAPI.getList()
            .then((newList) => dispatch(action.getListSuccessfully(newList)))
            .catch((error) => dispatch(action.getListError(error.message)));
    }
}
export const saveWaiter = (waiter) => {
    return (dispatch) => {
        if (waiter.id) {
            waitersAPI.update(waiter.id, waiter)
                .then((updatedWaiter) => dispatch(action.updateItem(updatedWaiter)))
        } else {
            waitersAPI.create(waiter).then((newWaiter) => dispatch(action.createItem(newWaiter)))
        }
    }
}

export const actionRemoveWaiter = (id) => {
    return (dispatch) => {
        waitersAPI.delete(id).then(() => {
            dispatch(action.removeItem(id))
        })
    }
};


export const getOneWaiter = (id) => {
    return (dispatch) => {
        waitersAPI.getOne(id).then((waiter) => dispatch(action.editItem(waiter)))
    }
};