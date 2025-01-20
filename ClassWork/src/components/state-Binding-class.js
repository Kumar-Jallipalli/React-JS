import React from "react";

export class TwoWayClassBindDemo extends React.Component {
    // Defining Constructor for State Instantiation
    constructor () {
        super()
        this.state = {
            product: {
                Name: '',
                Price: 0,
                City: '',
                Stock: false
            },
            newProduct : {
                Name: '',
                Price: 0,
                City: '',
                Stock: false
            }
        }
        // These Bindings are VREY IMPORTANT
        this.handleName = this.handleName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleStock = this.handleStock.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }


    handleName (e) {
        this.setState({
            product: {
                Name: e.target.value,
                Price: this.state.product.Price,
                City: this.state.product.City,
                Stock: this.state.product.Stock
            },
            newProduct : {
                Name: this.state.newProduct.Name,
                Price: this.state.newProduct.Price,
                City: this.state.newProduct.City,
                Stock: this.state.newProduct.Stock
            }
        })
    }
    handlePrice (e) {
        this.setState({
            product: {
                Price: e.target.value,
                Name: this.state.product.Name,
                City: this.state.product.City,
                Stock: this.state.product.Stock
            },
            newProduct : {
                Name: this.state.newProduct.Name,
                Price: this.state.newProduct.Price,
                City: this.state.newProduct.City,
                Stock: this.state.newProduct.Stock
            }
        })
    }
    handleCity (e) {
        this.setState({
            product: {
                City: e.target.value,
                Price: this.state.product.Price,
                Name: this.state.product.Name,
                Stock: this.state.product.Stock
            },
            newProduct : {
                Name: this.state.newProduct.Name,
                Price: this.state.newProduct.Price,
                City: this.state.newProduct.City,
                Stock: this.state.newProduct.Stock
            }
        })
    }
    handleStock (e) {
        this.setState({
            product: {
                Stock: e.target.checked,
                City: this.state.product.City,
                Price: this.state.product.Price,
                Name: this.state.product.Name,
            },
            newProduct : {
                Name: this.state.newProduct.Name,
                Price: this.state.newProduct.Price,
                City: this.state.newProduct.City,
                Stock: this.state.newProduct.Stock
            }
        })
    }

    handleRegister () {
        this.setState({
            product: this.state.product,
            newProduct: this.state.product
        })
    }

    render() {
        return (
            <div className="container-fluid row">
                <div className="col-4">
                    <h1>Register Product</h1>
                    <dl>
                        <dt>Name</dt>
                        <dd>
                            <input type="text" className="form-control" onChange={this.handleName}/>
                        </dd>
                        <dt>Price</dt>
                        <dd>
                            <input type="text" className="form-control" onChange={this.handlePrice}/>
                        </dd>
                        <dt>City</dt>
                        <dd>
                            <select className="form-select" onChange={this.handleCity}>
                                <option>Hyderabad</option>
                                <option>Bangalore</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input type="checkbox" className="form-check-input" onChange={this.handleStock}/> Available
                        </dd>
                    </dl>
                    <button type="submit" className="btn btn-primary w-100" onClick={this.handleRegister}>Register</button>
                </div>
                <div className="col-8">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{this.state.newProduct.Name}</dd>
                        <dt>Price</dt>
                        <dd>{this.state.newProduct.Price}</dd>
                        <dt>City</dt>
                        <dd>{this.state.newProduct.City}</dd>
                        <dt>Stock</dt>
                        <dd>{this.state.newProduct.Stock?'Avialable':'Out of Stock'}</dd>
                    </dl>
                </div>
            </div>
        )
    }
}