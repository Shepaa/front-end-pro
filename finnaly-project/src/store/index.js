import {configureStore} from '@reduxjs/toolkit'
import waiterReducer from "../features/waiters/store/reducer";
import tableReducer from '../features/tables/store/reducer'
import dishesReducer from "../features/dishes/store/reducer";
import orderReducer from "../features/orders/store/reducer";


export const store = configureStore({
    reducer:
        {
            waiters: waiterReducer,
            tables: tableReducer,
            dishes: dishesReducer,
            orders: orderReducer
        },

})