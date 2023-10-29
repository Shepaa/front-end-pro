import {createSlice} from '@reduxjs/toolkit'

const orderSliceName = 'order';

const DEFAULT_ORDER = {
    firstName: '',
    numberTable:'',
    dishes: ''
};

const initialState = {
    order: DEFAULT_ORDER,
    ordersList: [],
    ordersListLoading: false,
    ordersListError: ''
};


export const orderSlice = createSlice({
    name: orderSliceName,
    initialState,
    reducers: {
        getListLoading: (state) => {
            state.ordersListLoading = true;
            state.ordersListError = '';
        },
        getListSuccessfully: (state, {payload}) => {
            state.ordersList = payload;
            state.ordersListLoading = false;
        },
        getListError: (state, {payload}) => {
            state.ordersListLoading = false;
            state.ordersListError = payload;
        },
        editItem: (state, {payload}) => {
            state.order = payload;
        },
        removeItem: (state, {payload}) => {
            state.ordersList = state.ordersList.filter((order) => order.id !== payload)
        },
        createItem: (state, {payload}) => {
            state.ordersList = [...state.ordersList, payload]
        },
        updateItem: (state, {payload}) => {
            state.order = DEFAULT_ORDER
            state.ordersList = state.ordersList.map((order) => order.id === payload.id ? payload : order)
        }
    }
});

export const
    {
        getListError,
        getListLoading,
        getListSuccessfully,
        removeItem,
        editItem,
        createItem,
        updateItem
    } = orderSlice.actions;
export default orderSlice.reducer;