import {useState} from 'react'

export function EventBinding () {
    const [data, setData] = useState()

    // Event Handler
    function handleData (e) {
        setData(e.target.value)
    }

    return (
        <div>
            {/* Invalid Data Binding */}
            <input type='text' value={data}/>

            {/* Valid Data Binding */}
            <input type='text' value={data} onChange={handleData} />
            <h2>Hello {data}..! </h2>

            {/* As "Value" field is NOT used, we can use Any Event */}
            <input type='text' onBlur={handleData} />
        </div>
    )
    /**
     *  The flaw in this example is that:
     *      We have used the SAME state variable in all the input tags
     *      Hence, the onChage & onBlur events update the state in all forms
     * 
     *  i.e., the onChange handler of ONE Form tag is being used by other Form tag
    */
}