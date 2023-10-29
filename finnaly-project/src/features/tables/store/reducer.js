import {createSlice} from '@reduxjs/toolkit'

const tablesSliceName = 'tables';

const DEFAULT_TABLE = {
    number: ''
};

const initialState = {
    table: DEFAULT_TABLE,
    tableList: [],
    listLoading: false,
    listError: ''
};


export const tableSlice = createSlice({
    name: tablesSliceName,
    initialState,
    reducers: {
        getListLoading: (state) => {
            state.listLoading = true;
            state.listError = '';
        },
        getListSuccessfully: (state, {payload}) => {
            state.tableList = payload;
            state.listLoading = false;
        },
        getListError: (state, {payload}) => {
            state.listLoading = false;
            state.listError = payload;
        },
        editItem: (state, {payload}) => {
            state.table = payload;
        },
        removeItem: (state, {payload}) => {
            state.tableList = state.tableList.filter((table) => table.id !== payload)
        },
        createItem: (state, {payload}) => {
            state.tableList = [...state.tableList, payload]
        },
        updateItem: (state, {payload}) => {
            state.table = DEFAULT_TABLE
            state.tableList = state.tableList.map((table) => table.id === payload.id ? payload : table)
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
    } = tableSlice.actions;
export default tableSlice.reducer;