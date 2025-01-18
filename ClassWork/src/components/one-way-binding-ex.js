import { useState, useEffect } from "react";

export function OneWayBindingEx () {
    const [categories, SetCategories] = useState()
    const [products, SetProducts] = useState()

    function loadCategories () {
        fetch('https://fakestoreapi.com/products/categories')
        .then (data => data.json())
        .then (data => {
            // Adding "All" as 1st ELement into the Array 
            data.unshift("all")
            SetCategories(data)
        } )
        console.log(categories)
    }

    function loadProducts () {
        fetch('https://fakestoreapi.com/products')
        .then (data => data.json())
        .then (data => SetProducts(data))
        console.log(products)
    }

    //  Both these functions will be called during 1st load of Component
    useEffect(() => {
        loadCategories()
        loadProducts()
    },[])

    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1><span className="bi bi-cart" ></span> Shopping Cart</h1>
            </header>
            <section className="row">
                <nav className="col-3">
                    <div>
                        <p>Select Categories</p>
                        <select className="form-select">
                            {
                                categories.map(item => 
                                    <option>{item}</option>
                                )
                            }
                        </select>
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap overflow-auto" style={{height:'90vh'}}>
                        {
                            products.map(item => 
                                <div className="card m-2 p-2 w-25">
                                    <img src={item.image} className="card-img-top" height={150} />
                                    <div className="card-header h-25">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="card-body">
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{item.price}</dd>
                                            <dt>Rating</dt>
                                            <dl><span className="bi bi-star-fill text-warning"></span> {item.rating.rate}
                                            <span> [ {item.rating.count} ]</span></dl>
                                        </dl>
                                    </div>
                                </div>
                            )
                        }
                </main>
            </section>
        </div>
    )
}