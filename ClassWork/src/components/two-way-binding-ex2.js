import { useState, useEffect } from "react";

export function TwoWayBindingEx2 () {
    const [categories, SetCategories] = useState([])
    const [products, SetProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [cartPrice, setCartPrice] = useState(0)

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
            cartItems.push(data)
            setCartItemsCount(cartItems.length)

            setCartPrice(cartPrice+data.price)
            
            // Why both are NOT same..?
            console.log(data)
            console.log(cartItems)      // Is it due to fetch method..!
        })
        alert("Item Added to Cart")
    }

    // Cart Items Deletion
    function handleCartItemDeletion (e) {
        let cartId = e.target.id
        itemDeletion = cartItems.filter(item => item.id!=cartId)
        setCartItems(itemDeletion)
        setCartItemsCount(itemDeletion.length)
    }

    // Delete all function
    function handleCartDeletion () {
        setCartItems([])
        setCartItemsCount(0)
        setCartPrice(0)
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
                <main className="col-7 d-flex flex-wrap overflow-auto" style={{height:'90vh'}}>
                        {
                            products.map(item => 
                                <div className="card m-2 p-2" style={{width:'250px'}}>
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
                <aside className="col-3">
                    <div>
                        <button className="btn btn-secondary w-100">
                            <span className="bi bi-cart4"></span> [ {cartItemsCount} ] Cart Items
                        </button>
                    </div>
                    <div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Preview</th>
                                    <th>
                                        <button className="btn btn-outline-danger" onClick={handleCartDeletion}>
                                            delete all <span className="bi bi-trash2"></span>
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(item => 
                                        <tr>
                                            <td>{item.title}</td>
                                            <td>{item.price}</td>
                                            <td><img src={item.image} width={50} height={50}/></td>
                                            <td>
                                                <button className="btn btn-danger" id={item.id} onClick={handleCartItemDeletion}>
                                                    <span className="bi bi-trash"></span>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Total</td>
                                    <td>{cartPrice}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </aside>
            </section>
        </div>
    )
}