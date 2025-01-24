import { useEffect, useReducer, useState } from "react"

let initialState = {likes: 0, dislikes: 0};

function reducer (state, action) {
    switch (action.type) {
        case 'like':
            return {
                likes: state.likes + 1,
                dislikes: state.dislikes
            }
        case 'dislike':
            return {
                likes: state.likes,
                dislikes: state.dislikes + 1
            }
    }
}

export function ReducerComplexEx1 () {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [product, setProduct] = useState ({})

    useEffect (() => {
        fetch('https://fakestoreapi.com/products/1')
        .then (res => res.json())
        .then (data => setProduct(data))
    },[])

    function handleLikes () {
        dispatch({
            type: 'like'
        })
    }
    function handleDislikes () {
        dispatch({
            type: 'dislike'
        })
    }

    return (
        <div className="container">
            <h2>Product Details</h2>
            <div className="card p-1" style={{width: 400}} >
                <img className="card-img-top" style={{height: 200}} src={product.image} />
                <div className="card-header">
                    <p>{product.title}</p>
                </div>
                <div className="card-footer ">
                    <button className="btn btn-primary" onClick={handleLikes}>
                            <span className="bi bi-hand-thumbs-up"> {state.likes}</span>
                    </button>  
                    <button className="btn btn-danger" onClick={handleDislikes}>
                        <span className="bi bi-hand-thumbs-down"> {state.dislikes}</span>
                    </button>
                    
                </div>
            </div>
        </div>
    )
} 