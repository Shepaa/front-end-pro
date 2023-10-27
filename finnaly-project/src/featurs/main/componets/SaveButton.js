import React from "react";
import {useFormikContext} from "formik";
import {Button} from "antd";

export function SaveButton() {
    const {isValid} = useFormikContext()

    return (
        <Button
            type='primary'
            disabled={!isValid}
            htmlType="submit"
            style={{marginTop: '20px'}}
        >
            Save
        </Button>
    )
}