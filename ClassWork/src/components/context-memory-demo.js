import React, {useState, useContext} from "react";

// Creating Context Memory Globally, So that it can be user in all functions
const userDetailsContext = React.createContext(null)

export function ContextMemoryDemo () {
    const [userDetails, setUserDetails] = useState({
        updateUser: {
            UserName: '',
            Password: ''
        },
        setUser: {
            UserName: 'To be Fetched',
            Password: 'To be Fetched'
        }
    })

    function HandleUserName (e) {
        setUserDetails({
            updateUser: {
                UserName: e.target.value,
                Password: userDetails.updateUser.Password
            },
            setUser: {
                UserName: '',
                Password: ''
            }
        })
    }
    function HandlePassword (e) {
        setUserDetails({
            updateUser: {
                UserName: userDetails.updateUser.UserName,
                Password: e.target.value
            },
            setUser: {
                UserName: '',
                Password: ''
            }
        })
    }
    function HandlePassDetails (e) {
        setUserDetails ({
            updateUser: {
                UserName: userDetails.updateUser.UserName,
                Password: userDetails.updateUser.Password
            },
            setUser: {
                UserName: userDetails.updateUser.UserName,
                Password: userDetails.updateUser.Password
            },
        })
    }

    return (
        <userDetailsContext.Provider value={userDetails} >
            <div className="container">
                <div>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" onChange={HandleUserName}/></dd>
                        <dt>Password</dt>
                        <dd><input type="text" onChange={HandlePassword}/></dd>
                    </dl>
                    <button onClick={HandlePassDetails}>Pass Details</button>
                </div>
                {/* <h3>User Name: {userDetails.setUser.UserName}</h3>
                <h3>User Name: {userDetails.setUser.Password}</h3> */}
                <hr/>
                <HeaderComponent/>
            </div>
        </userDetailsContext.Provider>
    )
}

// 1st Level Child Component
function HeaderComponent () {
    const details = useContext(userDetailsContext)
    return (
        <div className="container bg-black text-white">
            <h1>Accessing the Details in Child Component</h1>
            <h3>UserName: {details.setUser.UserName} </h3>
            <FooterComponent/>
        </div>
    )
}

// 2nd Level Child Component
function FooterComponent () {
    const details = useContext(userDetailsContext)
    return (
        <div>
            <h3 >Password: <span className="text-danger">{details.setUser.Password}</span> </h3>
        </div>
    )
}