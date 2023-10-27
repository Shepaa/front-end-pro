import {Route, Routes} from "react-router-dom";
import {OrdersList} from "./ordersList";
import {NotFound} from "../../pages/NotFound";
import {OrdersForm} from "./ordersForm";

export function OrdersApp() {
    return (

        <>
        <Routes>
            <Route path='/list' element={<OrdersList/>}/>
            <Route path='/edit' element={<OrdersForm/>}/>
            <Route path='/edit/:orderId' element={<OrdersForm/>}/>

            <Route path='/*' element={<NotFound/>}/>

        </Routes>
        </>
    )
}