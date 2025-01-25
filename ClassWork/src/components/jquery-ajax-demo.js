import {useEffect, useState} from 'react'
import $, { get } from 'jquery'

export function JQueryAjaxDemo () {
    const [users, setUsers] = useState([])

    useEffect(() => {
        $.ajax({
            method: "GET",
            url: "http://localhost:4000/getusers",
            success: (res) => {
                setUsers(res)
            }
        })
    },[])

    return (
        <div>
            <h2>User's List</h2>
            <ol>
                {
                    users.map((obj) => (
                        <li>{obj.name}</li>
                    ))
                }
            </ol>
        </div>
    )
}