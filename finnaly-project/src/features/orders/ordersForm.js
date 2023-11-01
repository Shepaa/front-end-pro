import React, { useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getOneOrder, saveOrder} from "./store/thunk";
import styles from "../Form.module.css";
import { Formik, Field } from 'formik';

export function OrdersForm() {
    const dispatch = useDispatch();
    const dishesList = useSelector(state => state.dishes.dishesList);
    const order = useSelector(state => state.orders.order);
    const { orderId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getOneOrder(orderId));
        };

        if (orderId) {
            fetchData();
        }
    }, [orderId]);

    const onSubmit = async (values) => {
        dispatch(saveOrder(values))
    }

    return (
        <div className={styles.centeredContainer}>
            <Formik
                enableReinitialize={true}
                initialValues={order}
                onSubmit={onSubmit}
            >
                <Form className={styles.form}>
                    <label className={styles.formLabel} htmlFor="firstName">Имя официанта</label>
                    <Field
                        className={styles.formField}
                        name="firstName"
                    />

                    <label className={styles.formLabel} htmlFor="numberTable">Номер столика</label>
                    <Field
                        className={styles.formField}
                        name="numberTable"
                        render={({ field }) => (
                            <Input {...field} type="number" />
                        )}
                    />

                    <label className={styles.formLabel} htmlFor="matchingDishes">Блюда</label>
                    <Field
                        className={styles.formField}
                        name="matchingDishes"
                        render={({ field }) => (
                            <Select
                                {...field}
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Выберите блюда"
                            >
                                {dishesList.map((dish) => (
                                    <Select.Option key={dish.id} value={dish.id}>
                                        {dish.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        )}
                    />

                    <button type="submit">Сохранить</button>
                </Form>
            </Formik>
        </div>
    );
}
