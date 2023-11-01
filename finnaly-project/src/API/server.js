import {API} from "./API";
import {
    localHostDishesURL,
    localHostOrdersURL,
    localHostTablesURL,
    localHostWaitersURl
}
    from "./URL";

export const waitersAPI = new API(localHostWaitersURl)
export const tablesAPI = new API(localHostTablesURL)
export const dishesAPI = new API(localHostDishesURL)
export const orderAPI = new API(localHostOrdersURL)