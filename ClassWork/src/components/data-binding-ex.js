export function DataBindingEx () {
    // Tables Creation using React Components
    let products = [
        {Name : 'Samsung', Price: 65000.44},
        {Name : 'LG', Price: 63000.87},
        {Name : 'LSony', Price: 69000.32}
    ]

    // Nested Iterations
    let menu = [
        {category: "Mobiles", Products: ['Apple', "Samsung", 'Pixel', 'Nothing'] },
        {category: "Laptops", Products: ['Dell', "HP", 'Acer', 'Asus'] },
    ]

    return (
        <div className="container">
            <h2>TV Applicances</h2>

            {/* Tables Creation using React Components */}
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>TV Brand</th>
                        <th>TV Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(tv =>
                            <tr>
                                <td>{tv.Name}</td>
                                <td>{tv.Price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <h2>Ordered List</h2>
            {/* Nested Iteratios using Ordered Lists */}
            <ol>
                {
                    menu.map( item => 
                        <li>
                            {item.category}
                            <ul>
                                {
                                    item.Products.map( ele => 
                                        <li>{ele}</li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>

            <h2>Dropdowns</h2>
            {/* Nested Iteratios using Dropdown Lists  */}
            <select>
                {
                    menu.map(item => 
                        <optgroup label={item.category}>
                            {
                                item.Products.map(ele => 
                                    <option>{ele}</option>
                                )
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}