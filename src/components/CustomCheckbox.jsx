import React from 'react';
import {useField} from "formik";

const CustomCheckbox = ({label, ...props}) => {
    const [field, meta] = useField(props)

    // console.log('Field', field)
    // console.log('Meta', meta)

    return (
        <>
            <div className="checkbox">
                <input
                    {...field}
                    {...props}
                    className={meta.touched && meta.error ? 'input-error' : ''}
                />
                <span style={{color: '#fff'}}>I accept the Terms of Service</span>
            </div>

            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default CustomCheckbox;