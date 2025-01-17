export function DataBinding () {
    // Data Binding using Collection methods
    let categories = ["All", "Mobiles", "Electronics"]

    // Data Binding using Expressions
    let producDescription = {
        name : "Sony PS5",
        price : 55000,
        available: true
    }

    return (
        <div>
            <h2>Product Description</h2>
            {/* Data Binding using Expressions*/}
            <dl>
                <dt>Product Name</dt>
                <dd>{producDescription.name}</dd>
                <dt>Product Price</dt>
                <dd>{producDescription.price}</dd>
                <dt>Stock Availability</dt>
                <dd>{(producDescription.name)?"Stock is Available":"Stock is Un-Available"}</dd>
            </dl>

            <h2>Product Categories</h2>
            {/* Data Binding using Collection Methods*/}
            <ol>
                {
                    // Bind the iterable element as a Literal
                    categories.map((item)=> {
                        return (<li key={item}>{item}</li>)
                    })
                }
            </ol>

            <h2>Product List</h2>
            <select>
                {
                    // Bind the iterable element as a Property & Literal
                    categories.map(item=>
                        <option value={item} key={item} > {item} </option>
                    )
                    // Key is used as --> Every Iterating Item must have a Unique Key 
                }
            </select>


        </div>
    )
}