import { useReducer } from "react"

/**
 *  - InitialState sets the Value for the State
 *  - i.e., state = {count: 0}
 *          - Here, we have set initialState of Component as 2
*/
let initialState = {count: 2};

//  rducer fn -> It updates the State based on the Actions
function reducer (state, action) {
    switch (action.type) {
        case 'like':
            return {count: state.count+1}
        case 'unLike':
            return {count: state.count-1}
        default:
            return 0;
    }
}

export function ReducerComponent () {
    /**
     *  - useReducer -> A React Hook used to Manage Complex State Logic
     *  - It Accepts 2 arguments
     *          1.  reducer -> To Update the State
     *          2. InitialState -> Represents Initial State of Component
     *  - useReducer Hook retuns an array of 2 elements
     *          1. State -> Represents Current State of Component
     *          2. dispatch -> dispatches Actions to Reducer fn for State Updation
    */
    const [state, dispatch] = useReducer(reducer, initialState)

    // Disptach Functions for Like & UnLike Actions
    function handleLike () {
        //  This sends the Action with type as Like to reducer function,
        //  So that reducer fn will update the State based on this Action
        dispatch ({
            type: 'like'
        })
    }
    function handleUnLike () {
        dispatch ({
            type: 'unLike'
        })
    }

    return (
        <div>
            <h2>Like Counter: {state.count} </h2>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleUnLike}>unLike</button>
        </div>
    )
}