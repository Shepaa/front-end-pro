import {dishesAPI} from "../../../API/server";

import * as action from './reducer'
export const actionGetDishesList = () => {
    return (dispatch) => {
        dispatch(action.getListLoading())
        dishesAPI.getList()
            .then((newList) => dispatch(action.getListSuccessfully(newList)))
            .catch((error) => dispatch(action.getListError(error.message)));
    }
}
export const saveDish = (dish) => {
    return (dispatch) => {
        if (dish.id) {
            dishesAPI.update(dish.id, dish)
                .then((updatedDish) => dispatch(action.updateItem(updatedDish)))
        } else {
            dishesAPI.create(dish).then((newDish) => dispatch(action.createItem(newDish)))
        }
    }
}

export const actionRemoveDish = (id) => {
    return (dispatch) => {
        dishesAPI.delete(id).then(() => {
            dispatch(action.removeItem(id))
        })
    }
};


export const getOneDish = (id) => {
    return (dispatch) => {
        dishesAPI.getOne(id).then((dish) => dispatch(action.editItem(dish)))
    }
};