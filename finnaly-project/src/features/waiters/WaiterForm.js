import React, {useEffect} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {getOneWaiter, saveWaiter} from "./store/thunk";
import * as Yup from "yup";
import {
    Field,
    Formik,
    Form
} from "formik";
import {ValidationError} from "../../componets/ValidationError";
import {useNavigate, useParams} from "react-router-dom";
import {SaveButton} from "../../componets/SaveButton";
import styles from '../Form.module.css';

const PHONE_TEMPLATE = /^\d{3}-\d{3}-\d{4}$/
const validationSchema = Yup.object({
    firstName: Yup.string().min(2).required("Must be more than 2 symbols"),
    phone: Yup.string().matches(PHONE_TEMPLATE, "Must be in format xxx-xxx-xxxx").required()
})

export function WaiterForm() {
    const waiter = useSelector(state => state.waiters.waiter)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {waiterId} = useParams()


    useEffect(() => {
        if (waiterId) {
            dispatch(getOneWaiter(waiterId))
        }
    }, [waiterId])


    const onSubmit = (values, {resetForm}) => {
        const formWaiter = {
            ...waiter,
            ...values
        }

        dispatch(saveWaiter(formWaiter))
        resetForm()
        navigate("/waiters/list")
    }


    return (
        <div className={styles.centeredContainer}>
            <Formik
                enableReinitialize={true}
                initialValues={waiter}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >

                <Form className={styles.form}>
                    <label className={styles.formLabel} htmlFor="firstName">First Name</label>
                    <Field className={styles.formField} type="text" name="firstName" id="firstName"/>
                    {ValidationError("firstName")}

                    <label className={styles.formLabel} htmlFor="phone">Phone</label>
                    <Field className={styles.formField} type="text" name="phone" id="phone"/>
                    {ValidationError("phone")}

                    <SaveButton/>
                </Form>
            </Formik>
        </div>
    )
}

