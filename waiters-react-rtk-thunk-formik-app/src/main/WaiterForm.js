import React from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {saveItem} from "./store/thunk";
import * as Yup from "yup";
import {
    Field,
    Formik,
    useFormikContext,
    Form
} from "formik";
import {ValidationError} from "./componets/ValidationError";

const PHONE_TEMPLATE = /^\d{3}-\d{3}-\d{4}$/
const validationSchema = Yup.object({
    firstName: Yup.string().min(2).required("Must be more than 2 symbols"),
    phone: Yup.string().matches(PHONE_TEMPLATE, "Must be in format xxx-xxx-xxxx").required()
})

export function WaiterForm() {
    const waiter = useSelector(state => state.waiters.waiter)
    const dispatch = useDispatch()

    const onSubmit = (values, {resetForm}) => {
        const formWaiter = {
            ...waiter,
            ...values
        }

        dispatch(saveItem(formWaiter))
        resetForm()
    }


    return (
        <Formik
            enableReinitialize={true}
            initialValues={waiter}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >

            <Form>
                <label htmlFor="firstName">Title</label>
                <Field type="text" name="firstName" id="firstName"/>
                {ValidationError("firstName")}

                <label htmlFor="phone">Phone</label>
                <Field type="text" name="phone" id="phone"/>
                {ValidationError("phone")}

                <SaveButton/>
            </Form>
        </Formik>
    )
}


function SaveButton() {
    const {isValid} = useFormikContext()

    return <button disabled={!isValid} type="submit">Save</button>
}
