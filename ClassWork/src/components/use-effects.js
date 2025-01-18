import { useState, useEffect } from "react"

export function UseEffect () {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then(response => response.json())
        .then(response => setData(response))
    },[])

    return (
        <div>
            <h2>Mars Rover details</h2>
            {console.log(data)}
            <table className="table table-info">
                <thead>
                    <tr>
                        <th>Image ID</th>
                        <th>Image Width</th>
                        <th>Image Height</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => 
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.width}</td>
                                <td>{item.height}</td>
                                <td>
                                    <img src={item.url} width={200} height={100} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}