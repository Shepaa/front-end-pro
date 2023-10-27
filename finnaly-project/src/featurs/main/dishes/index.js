import {Route, Routes} from "react-router-dom";
import {DishesForm} from "./dishesForm";
import {DishesList} from "./dishesList";
import {NotFound} from "../../pages/NotFound";
import React from "react";

export function DishesApp() {
    return (
        <Routes>
            <Route path='/list' element={<DishesList/>}/>
            <Route path='/edit' element={<DishesForm/>}/>
            <Route path='/edit/:dishesId' element={<DishesForm/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}