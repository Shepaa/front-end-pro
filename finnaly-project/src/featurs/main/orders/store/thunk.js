import {orderAPI} from "../../../../API/server";

import * as action from './reducer'
export const actionGetOrdersList = () => {
    return (dispatch) => {
        dispatch(action.getListLoading())
        orderAPI.getList()
            .then((newList) => dispatch(action.getListSuccessfully(newList)))
            .catch((error) => dispatch(action.getListError(error.message)));
    }
}
export const saveOrder = (order) => {
    return (dispatch) => {
        if (order.id) {
            orderAPI.update(order.id, order)
                .then((updatedOrder) => dispatch(action.updateItem(updatedOrder)))
        } else {
            orderAPI.create(order).then((newOrder) => dispatch(action.createItem(newOrder)))
        }
    }
}

export const actionRemoveOrder = (id) => {
    return (dispatch) => {
        orderAPI.delete(id).then(() => {
            dispatch(action.removeItem(id))
        })
    }
};


export const getOneOrder = (id) => {
    return (dispatch) => {
        orderAPI.getOne(id).then((order) => dispatch(action.editItem(order)))
    }
};