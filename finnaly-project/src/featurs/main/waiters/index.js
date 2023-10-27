import React from "react";
import {WaiterForm} from "./WaiterForm";
import {WaiterList} from "./WaitersList";
import {Route, Routes} from "react-router-dom";
import {NotFound} from "../../pages/NotFound";

export function WaitersApp() {


    return (
        <>
            <Routes>
                <Route path="/list" element={<WaiterList/>}/>
                <Route path='/edit' element={<WaiterForm/>}/>
                <Route path='/edit/:waiterId' element={<WaiterForm/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

        </>
    );
}