import {TablesForm} from "./TablesForm";
import {TablesList} from "./TablesList";
import {Route, Routes} from "react-router-dom";
import {NotFound} from "../NotFound/NotFound";

export function TablesApp() {
    return (
        <>
            <Routes>
                <Route path='/list' element={<TablesList/>}/>
                <Route path='/edit' element={<TablesForm/>}/>
                <Route path='/edit/:tablesId' element={<TablesForm/>}/>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </>
    )
}