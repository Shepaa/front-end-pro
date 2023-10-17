import {createSlice} from '@reduxjs/toolkit'

const waiterSliceName = 'waiter';

const DEFAULT_WAITER = {
    firstName: '',
    phone: ''
};

const initialState = {
    waiter: DEFAULT_WAITER,
    waitersList: [],
    listLoading: false,
    listError: ''
};


export const waiterSlice = createSlice({
    name: waiterSliceName,
    initialState,
    reducers: {
        getListLoading: (state) => {
            state.listLoading = true;
            state.listError = '';

        },
        getListSuccessfully: (state, {payload}) => {
            state.waitersList = payload;
            state.listLoading = false;
        },
        getListError: (state, {payload}) => {
            state.listLoading = false;
            state.listError = payload;
        },
        editItem: (state, {payload}) => {
            state.waiter = payload;
        },
        removeItem: (state, {payload}) => {
            state.waitersList = state.waitersList.filter((waiter) => waiter.id !== payload)
        },
        createItem: (state, {payload}) => {
            state.waitersList = [...state.waitersList, payload]
        },
        updateItem: (state, {payload}) => {
            state.waiter = DEFAULT_WAITER
            state.waitersList = state.waitersList.map((waiter) => waiter.id === payload.id ? payload : waiter)
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
    } = waiterSlice.actions;
export default waiterSlice.reducer;