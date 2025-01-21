import {Formik, useFormik} from 'formik'

export function FormikDemo () {
    // Configuring the Values
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Passsword: '',
            City: '',
            Subscription: false
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })

    return (
        <div className='container'>
            <h2 className='text-center bg-primary'>User Registration</h2>
            <form onSubmit={formik.handleSubmit}>
                <h3>User Name</h3>
                <input className='form-control' name='UserName' type='text' value={formik.values.UserName} onChange={formik.handleChange}/>
                <h3>Password</h3>
                <input className='form-control' name='Passsword' type='password' value={formik.values.Passsword} onChange={formik.handleChange}/>
                <h3>City</h3>
                <select className='form-select' name='City' value={formik.values.City} onChange={formik.handleChange}>
                        <option>Hyderabad</option>
                        <option>Bangalore</option>
                </select>
                <h3>Subscribe</h3>
                <div className='form-switch'>
                    <input className='form-check-input' name='Subscription' type='checkbox' checked={formik.values.Subscription} onChange={formik.handleChange} />
                </div>
                <button type='submit' className='btn btn-outline-primary w-25 text-center'>Register</button>
            </form>
            <h2>Username</h2>
            {formik.values.UserName}
        </div>
    )
}