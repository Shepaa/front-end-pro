import {
    ACTION_WAITER_SET_EDIT_ITEM,
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
        default :
            return state;
    }
}