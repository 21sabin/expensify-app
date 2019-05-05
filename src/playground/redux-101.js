import { createStore } from 'redux';


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy: typeof decrementBy === 'number' ? decrementBy : 1
});

const setCount=({count=0})=>({
    type:"SET",
    count:typeof count==='number'?count:count
});

const reset=()=>({
    type:"RESET"
})

//state gives the current state
const countReducer = (state = { count: 0 }, action) => {
    console.log(action, "action")
    console.log("running");
    // const incrementBy=typeof action.incrementBy==='number'?action.incrementBy:1;
    // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: state.count = 0
            }
        case "SET":
            return {
                count: action.count
            }
        default:
            return state;
    }
    // if(action.type="INCREMENT"){
    //     return {
    //         count:state.count+1
    //     }
    // }else{
    //     return state;
    // }

}

const store=createStore(countReducer);


console.log(store.getState())
//subscribe mehtod calls everytime when state is changed 
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 5 }))
store.dispatch(reset());
store.dispatch(setCount({}))

console.log(store.getState())

// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 5

// });

// store.dispatch({
//     type: "SET",
//     count: 101
// })
    // store.dispatch({
    //     type:"DECREMENT"
    // })

    // store.dispatch({
    //     type:"RESET"
    // })
    // console.log(store.getState())

