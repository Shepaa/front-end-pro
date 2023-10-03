export const ACTION_WAITERS_SET_LIST = "WAITERS_SET-LIST"
export const ACTION_WAITER_SET_ITEM = 'WAITER_SET_ITEM';
export const ACTION_WAITER_SET_EDIT_ITEM = 'WAITER_SET_EDIT_ITEM';
export const ACTION_WAITER_REMOVE_ITEM = 'WAITER_REMOVE_ITEM';



export const actionSetList = (list) => ({type: ACTION_WAITERS_SET_LIST, payload: list});
export const actionEditItem = (waiter) => ({type: ACTION_WAITER_SET_EDIT_ITEM, payload: waiter});




