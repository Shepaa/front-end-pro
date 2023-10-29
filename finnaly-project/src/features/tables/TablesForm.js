import React, {useEffect} from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {getOneItem, saveItem} from "./store/thunk";
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

const validationSchema = Yup.object({
    number: Yup.number().min(1).required("Must be only number")
})

export function TablesForm() {
    const table = useSelector(state => state.tables.table)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {tablesId} = useParams()



    useEffect(() => {
        if (tablesId)
            dispatch(getOneItem(tablesId))

    }, [tablesId])


    const onSubmit = (values, {resetForm}) => {
        const formTable = {
            ...table,
            ...values
        }

        dispatch(saveItem(formTable))
        resetForm()
        navigate("/tables/list")
    }


    return (
        <div className={styles.centeredContainer}>
        <Formik
            enableReinitialize={true}
            initialValues={table}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >

            <Form className={styles.form}>
                <label className={styles.formLabel} htmlFor="number">Table's number</label>
                <Field className={styles.formField}  type="text" name="number" id="number"/>
                {ValidationError("number")}

                <SaveButton/>
            </Form>
        </Formik>
        </div>
    )
}



