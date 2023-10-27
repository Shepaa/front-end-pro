import {useDispatch, useSelector} from "react-redux";
import {useDishesColumn} from "./useDishesColumn";
import React, {useState, useEffect} from "react";
import {actionGetDishesList} from "./store/thunk";
import {Page} from "../../pages/Page";
import {Alert, Input} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {AddButton} from "../componets/AddButton";
import {CustomTable} from "../componets/Table";

export function DishesList() {
    const dispatch = useDispatch();
    const columns = useDishesColumn();
    const dishesList = useSelector((state) => state.dishes.dishesList);
    const dishesListLoading = useSelector((state) => state.dishes.dishesListLoading);
    const dishesListError = useSelector((state) => state.dishes.dishesListError);
    const [searchDishName, setSearchDishName] = useState("");
    const [filteredDishes, setFilteredDishes] = useState([]);

    useEffect(() => {
        dispatch(actionGetDishesList());
    }, []);

    useEffect(() => {
        setFilteredDishes(
            dishesList.filter((dish) => dish.name.toLowerCase().includes(searchDishName.toLowerCase()))
        );
    }, [searchDishName, dishesList]);

    function onSearchInputChange(e) {
        setSearchDishName(e.target.value);
    }

    return (
        <Page title="Dishes List">
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Input
                    onChange={onSearchInputChange}
                    placeholder="Search by dish name"
                    style={{width: "60%"}}
                    prefix={<SearchOutlined/>}
                />
                <AddButton path='/dishes/edit'/>
            </div>
            <CustomTable
                loading={dishesListLoading}
                columns={columns}
                dataSource={filteredDishes}
                rowKey="id"
                pagination={{pageSize: 5}}
            />
            {filteredDishes.length === 0 && <Alert message={"No dishes found"} type="info"/>}
            {dishesListError && <Alert message={dishesListError} type="error"/>}
        </Page>
    );
}
