import { Form, useFormik } from "formik";

export function FormValidationEx1 () {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Email: '',
            Mobile: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
        validate: userValidations
    })

    function userValidations (values) {
        const errors = {};
        // UserName Validations
        if (values.UserName == '') {
            errors.UserName = 'UserName is Required'
        }
        else if (values.UserName.length < 4) {
            errors.UserName = "User Name is TOO SMALL"
        }
        else if (values.UserName.length > 15) {
            errors.UserName = "User Name is TOO LARGE"
        }

        // Email Validations
        if (values.Email == '') {
            errors.Email = 'Email is Required'
        }
        else if (values.Email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,6}$/)) {
            errors.Email = ''
        }
        else {
            errors.Email = "Invalid Email ID: \n Email must conatin '@', domain & TLD "
        }

        // Age Validations
        if (values.Age == '') {
            errors.Age = 'Age is Required'
        }
        else if (isNaN(values.Age)) {
            errors.Age = 'Age must be a Number'
        }

        // Mobile Validations
        if (values.Mobile == '') {
            errors.Mobile = 'Mobile is Required'
        }
        else if (values.Mobile.match(/^[0-9]*123[0-9]*$/)) {
            errors.Mobile = ''
        }
        else {
            errors.Mobile = "Invalid Mobile Number"
        }

        return errors;
    }

    return (
        <div className="container">
            <h1>Register User</h1>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input type="text" name="UserName" onChange={formik.handleChange} />
                    </dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd>
                        <input type="text" name="Age" onChange={formik.handleChange} />
                    </dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd>
                        <input type="text" name="Email" onChange={formik.handleChange} />
                    </dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" name="Mobile" onChange={formik.handleChange} />
                    </dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
            <h2>{formik.values.UserName}</h2>
        </div>
    )
}