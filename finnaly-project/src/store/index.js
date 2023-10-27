import {configureStore} from '@reduxjs/toolkit'
import waiterReducer from "../featurs/main/waiters/store/reducer";
import tableReducer from '../featurs/main/tables/store/reducer'
import dishesReducer from "../featurs/main/dishes/store/reducer";
import orderReducer from "../featurs/main/orders/store/reducer";


export const store = configureStore({
    reducer:
        {
            waiters: waiterReducer,
            tables: tableReducer,
            dishes: dishesReducer,
            orders: orderReducer
        },

})