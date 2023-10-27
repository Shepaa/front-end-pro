import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFound} from "./featurs/pages/NotFound";
import {About} from "./featurs/pages/About";
import {WaitersApp} from "./featurs/main/waiters";
import {Layout} from "./featurs/main/componets/Laoyut";
import {TablesApp} from "./featurs/main/tables";
import {DishesApp} from "./featurs/main/dishes";
import {OrdersApp} from "./featurs/main/orders";
import {BasePage} from "./featurs/pages/BasePage";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BasePage/>}/>
                <Route element={<Layout/>}>
                    <Route path='/orders/*' element={<OrdersApp/>}/>
                    <Route path="/waiters/*" element={<WaitersApp/>}/>
                    <Route path="/tables/*" element={<TablesApp/>}/>
                    <Route path="/dishes/*" element={<DishesApp/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}