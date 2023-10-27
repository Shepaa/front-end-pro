import {createSlice} from '@reduxjs/toolkit'

const dishesSliceName = 'dishes';

const DEFAULT_DISH = {
    name: '',
    description:'',
    price: ''
};

const initialState = {
    dish: DEFAULT_DISH,
    dishesList: [],
    dishesListLoading: false,
    dishesListError: ''
};


export const dishesSlice = createSlice({
    name: dishesSliceName,
    initialState,
    reducers: {
        getListLoading: (state) => {
            state.dishesListLoading = true;
            state.dishesListError = '';
        },
        getListSuccessfully: (state, {payload}) => {
            state.dishesList = payload;
            state.dishesListLoading = false;
        },
        getListError: (state, {payload}) => {
            state.dishesListLoading = false;
            state.dishesListError = payload;
        },
        editItem: (state, {payload}) => {
            state.dish = payload;
        },
        removeItem: (state, {payload}) => {
            state.dishesList = state.dishesList.filter((dish) => dish.id !== payload)
        },
        createItem: (state, {payload}) => {
            state.dishesList = [...state.dishesList, payload]
        },
        updateItem: (state, {payload}) => {
            state.dish = DEFAULT_DISH
            state.dishesList = state.dishesList.map((dish) => dish.id === payload.id ? payload : dish)
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
    } = dishesSlice.actions;
export default dishesSlice.reducer;