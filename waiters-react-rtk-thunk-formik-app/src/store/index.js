import { configureStore } from '@reduxjs/toolkit'
import waiterReducer from "../main/store/reducer";



export const store = configureStore({
    reducer: { waiters: waiterReducer},
})