import {tablesAPI} from "../../../API/server";

import * as action from './reducer'
export const actionGetApiList = () => {
    return (dispatch) => {
        dispatch(action.getListLoading())
        tablesAPI.getList()
            .then((newList) => dispatch(action.getListSuccessfully(newList)))
            .catch((error) => dispatch(action.getListError(error.message)));
    }
}
export const saveItem = (table) => {
    return (dispatch) => {
        if (table.id) {
            tablesAPI.update(table.id, table)
                .then((updatedTable) => dispatch(action.updateItem(updatedTable)))
        } else {
            tablesAPI.create(table).then((newTable) => dispatch(action.createItem(newTable)))
        }
    }
}

export const actionRemoveItem = (id) => {
    return (dispatch) => {
        tablesAPI.delete(id).then(() => {
            dispatch(action.removeItem(id))
        })
    }
};


export const getOneItem = (id) => {
    return (dispatch) => {
        tablesAPI.getOne(id).then((table) => dispatch(action.editItem(table)))
    }
};