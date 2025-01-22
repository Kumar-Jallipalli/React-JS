import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup' 

export function YupValidationsEx2 () {
    return (
        <div className="container">
            <h2>User Registration</h2>
            <Formik 
                initialValues = {
                    // We are using {} TWO times, because
                    //      1. to embed dynamic data, we use {}
                    //      2. To define the Object, as initialValues takes an Obejct
                    {
                        UserName: '',
                        Email: '',
                        Age: '',
                        City: ''
                    }
                }

                onSubmit={
                    (values) => {
                        alert(JSON.stringify(values))
                    }
                }

                validationSchema={
                    Yup.object({
                        UserName: Yup.string().required('User Name is Required')
                                     .min(4, "Name is too Short").max(10, 'Name is too Long'),
                        Email: Yup.string().required('Email is Required').email("Invalid Email"),
                        Age: Yup.number().required("Age is Required").min(0, "Age must be Positive Integer")
                    })
                }
            >
                {
                    // This is Form State Validations using Returned Form COmponent
                    //      i.e., Performing the Form Level Validations on all the Fields returned by Form
                    //      We are storing all the fields returned by Form in "fields" variable
                    fields => (
                        <Form>
                            {
                                <div>
                                    <dl>
                                        <dt>User Name</dt>
                                        <dd>
                                            <Field type="text" name="UserName" ></Field>
                                        </dd>
                                        {/* This is Input Field State Validation using -> ErrorMessage */}
                                        <dd className="text-danger" > <ErrorMessage name="UserName" ></ErrorMessage> </dd>
                                        <dt>Email</dt>
                                        <dd>
                                            <Field type="text" name="Email" ></Field>
                                        </dd>
                                        {/* This is Input Field State Validation using -> ErrorMessage */}
                                        <dd className="text-danger" > <ErrorMessage name="Email" ></ErrorMessage> </dd>
                                        <dt>Age</dt>
                                        <dd>
                                            <Field type="text" name="Age" ></Field>
                                        </dd>
                                        {/* This is Input Field State Validation using -> ErrorMessage */}
                                        <dd className="text-danger" > <ErrorMessage name="Age" ></ErrorMessage> </dd>
                                        <dt>City</dt>
                                        <dd>
                                            <Field as='select'>
                                                <option>Hyderabad</option>
                                                <option>Bangalore</option>
                                            </Field>
                                        </dd>
                                    </dl>
                                    {/* Using the Form level State Validations to enable Button */}
                                    <button disabled={(fields.isValid)?false:true} >Register</button>
                                </div>
                            }
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}