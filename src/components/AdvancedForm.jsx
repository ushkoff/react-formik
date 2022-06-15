import React from 'react';
import {Form, Field, Formik} from "formik";
import CustomInput from "./CustomInput";
import {advancedSchema} from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) => {
    console.log(values)
    console.log(actions)
    console.log('Submitted!')

    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
}

const AdvancedForm = () => {
    return (
        <Formik
            initialValues={{ username: '', jobType: '', acceptedTos: false }}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                    <CustomSelect
                        label="Job type"
                        name="jobType"
                        placeholder="Please select a job"
                    >
                        <option value="">Please select a job type</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Product Manager</option>
                        <option value="other">Other</option>
                    </CustomSelect>
                    <CustomCheckbox
                        type="checkbox"
                        name="acceptedTos"
                    />

                    {/*<Field type="text" name="name" placeholder="Name" />*/}
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    onChange={props.handleChange}*/}
                    {/*    onBlur={props.handleBlur}*/}
                    {/*    value={props.values.name}*/}
                    {/*    name="name"*/}
                    {/*/>*/}
                    <button disabled={isSubmitting} type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default AdvancedForm;