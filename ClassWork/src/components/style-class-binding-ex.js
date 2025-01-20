import {useState} from "react";

export function StyleClassBindingEx () {
    const [theme, setTheme] = useState('')

    function handleTheme (e) {
        if (e.target.checked) {
            setTheme(
                "bg-black text-white container"
            )
        }
        else {
            setTheme(
                "bg-white text-black container-fliud"
            )
        }
    }

    return (
        <div className={theme}>
            <div className="form-switch">
                <input className="form-check-input" type="checkbox" onChange={handleTheme}/> Dark Theme
            </div>
            <h3>UserName</h3>
            <input type="text" className="form-control" />
            <h3>Password</h3>
            <input type="password" className="form-control" />
            <button className="btn btn-primary">Login</button>
        </div>
    )
}