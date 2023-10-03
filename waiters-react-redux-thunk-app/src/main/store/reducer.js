import {
    ACTION_WAITER_CREATE_ITEM,
    ACTION_WAITER_REMOVE_ITEM,
    ACTION_WAITER_SET_EDIT_ITEM, ACTION_WAITER_UPDATE_ITEM,
    ACTION_WAITERS_SET_LIST
}
    from "./actions";

const initialState = {
    waiter: undefined,
    waitersList: [],
}

export function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case ACTION_WAITERS_SET_LIST:
            return {...state, waitersList: payload}
        case ACTION_WAITER_SET_EDIT_ITEM:
            return {...state, waiter: payload}
        case ACTION_WAITER_REMOVE_ITEM:
            return {...state, waitersList: state.waitersList.filter((waiter) => waiter.id !== payload)}
        case ACTION_WAITER_CREATE_ITEM:
            return {...state, waitersList: [...state.waitersList, payload]}
        case  ACTION_WAITER_UPDATE_ITEM:
            return {
                ...state,
                waitersList: state.waitersList.map((waiter) => waiter.id === payload.id ? payload : waiter)}
        default :
            return state;
    }
}