import { useFormik } from "formik";
import * as yup from 'yup'

export function YupValidationsEx1 () {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Email: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
        validationSchema: yup.object({
            UserName: yup.string()
                         .required('User Name is Required')
                         .min(4, 'User Name is too Short')
                         .max(10, 'User Name is too Long'),
            Age: yup.number()
                    .required('Age is Required')
                    .min(0, "Age must be Positive Integers"),
            Email: yup.string()
                      .required("Email is Required")
                      .email("Inavlid Email")
        })
    })

    return (
        <div className="container">
            <h1>Register User</h1>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" {...formik.getFieldProps("UserName")} />
                    </dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd>
                        <input type="text" {...formik.getFieldProps("Age")} />
                    </dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd>
                        <input type="text" {...formik.getFieldProps("Email")} />
                    </dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}