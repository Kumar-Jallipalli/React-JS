import { useState, useEffect } from "react";

export function TwoWayBindingEx2 () {
    const [categories, SetCategories] = useState([])
    const [products, SetProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

    function loadCategories () {
        fetch('https://fakestoreapi.com/products/categories')
        .then (data => data.json())
        .then (data => {
            // Adding "All" as 1st ELement into the Array 
            data.unshift("all")
            SetCategories(data)
        } )
    }

    function loadProducts (url) {
        fetch(url)
        .then (data => data.json())
        .then (data => SetProducts(data))
        console.log(products)
    }

    //  Both these functions will be called during 1st load of Component
    useEffect(() => {
        loadCategories()
        loadProducts('https://fakestoreapi.com/products')
    },[])

    //  Filtering Products
    function handleProducts (e) {
        if (e.target.value == 'all') {
            loadProducts('https://fakestoreapi.com/products')
        }
        else {
            loadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }

        console.log(products)
    }

    //  Add to Card Handler
    function handleAddToCart (e) {
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(res => res.json())
        .then(data => {
            setCartItems(data)
            
            // Why both are NOT same..?
            console.log(data)
            console.log(cartItems)      // Is it due to fetch method..!
        })
    }

    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1><span className="bi bi-cart" ></span> Shopping Cart</h1>
            </header>
            <section className="row p-2">
                <nav className="col-2">
                    <div>
                        <h3>Select Categories</h3>
                        <select className="form-select" onChange={handleProducts}>
                            {
                                categories.map(item => 
                                    <option>{item}</option>
                                )
                            }
                        </select>
                    </div>
                </nav>
                <main className="col-8 d-flex flex-wrap overflow-auto" style={{height:'90vh'}}>
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
                                    <div className="card-footer">
                                        <button className="btn btn-primary w-100" onClick={handleAddToCart} id={item.id}>
                                            Add to Cart <span className="bi bi-cart4"></span>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                </main>
                <aside className="col-2">
                    <div>
                        <button className="btn btn-danger w-100">
                            <span className="bi bi-cart4"></span> [ {cartItems.length} ] Cart Items
                        </button>
                    </div>
                </aside>
            </section>
        </div>
    )
}