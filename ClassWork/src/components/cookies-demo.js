import { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { date } from "yup"

export function CookiesDemo () {
    const [userDetails, setUserDetails] = useState({
        UserName: '',
        Password: ''
    })

    // Creating Cookie
    const [cookie, setCookie, removeCookie] = useCookies(['userName'])

    function handleUserName (e) {
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password
        })
    }
    function handlePassword (e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value
        })
    }
    function handleLogin () {
        // Configuring the Cookie
        setCookie( 'userName', userDetails.UserName, {path:'/', expires:new Date('2025-01-25')} )
            /**
             *  Here,
             *      userDetails.UserName will be Configured to Cookie Name "userName"
             *      expires -> Determines the Expiry date for the Cookie
            */
        alert('Cookies Stored')
    }
    function handleRemoveCookies () {
        removeCookie('userName')
        alert("Cookies are Removed")
    }

    useEffect(() => {
        if (cookie.userName == undefined) {
            alert("No Cookies Stored, Please Login")
        }
        else {
            alert("Cookies are Configired, Proceeding to Use App")
        }
    },[])

    return (
        <div className="container">
            <div>
                <h1>Login Form</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={handleUserName} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={handlePassword} /></dd>
                </dl>
                <button onClick={handleLogin}>Login</button>
            </div>
            <hr/>
            <div>
                <h2>Data fetched from Cookies</h2>

                {/* Using the Cookies */}
                <p>User Name: {cookie.userName} </p>
            </div>
            <div>
                <button onClick={handleRemoveCookies} >Remove Cookies</button>
            </div>
        </div>
    )
}