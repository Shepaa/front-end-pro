import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {getOneDish} from "./store/thunk";
import {saveDish} from "./store/thunk";
import {Field, Form, Formik} from "formik";
import {ValidationError} from "../../componets/ValidationError";
import {SaveButton} from "../../componets/SaveButton";
import styles from '../Form.module.css';


const validationSchema = Yup.object({
    name: Yup.string().min(2).required("Must be more than 2 symbols"),
    description: Yup.string().min(2).required("Must be more than 2 symbols"),
    price: Yup.number().min(2).required("Must be more than 2 symbols")
})

export function DishesForm() {
    const dish = useSelector(state => state.dishes.dish);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {dishesId} = useParams()

    useEffect(() => {
        if (dishesId)
            dispatch(getOneDish(dishesId))
    }, [dishesId])
    const onSubmit = (values, {resetForm}) => {
        const formDish = {
            ...dish,
            ...values
        }

        dispatch(saveDish(formDish))
        resetForm()
        navigate("/dishes/list")
    }


    return (
        <div className={styles.centeredContainer}>
        <Formik
            enableReinitialize={true}
            initialValues={dish}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >

            <Form className={styles.form}>
                <label className={styles.formLabel} htmlFor="name">name</label>
                <Field className={styles.formField} type="text" name="name" id="name"/>
                {ValidationError("name")}

                <label className={styles.formLabel} htmlFor="description">description</label>
                <Field className={styles.formField} type="text" name="description" id="description"/>
                {ValidationError("description")}

                <label className={styles.formLabel} htmlFor="price">price</label>
                <Field className={styles.formField} type="text" name="price" id="price"/>
                {ValidationError("price")}

                <SaveButton/>
            </Form>
        </Formik>
        </div>
    )
}