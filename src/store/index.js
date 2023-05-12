import { legacy_createStore,applyMiddleware, compose } from "redux";

let initialState={
    selectedOrder:'',
    size:'',
    cart:[],
    isOpen:false
}

function reducer(state=initialState,action){
    switch(action.type){
        case 'orderBy':
            return {...state,selectedOrder:action.payload}
        case 'size':
            return {...state,size:action.payload}
        case 'increment':
            return {...state,cart:action.payload}
        case 'decrement':
            return {...state,cart:action.payload}
        case 'addCart':
            return {...state,cart:action.payload}
        case 'isOpen':
            return {...state,isOpen:action.payload}
        default:
            return state    
    }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware()
  // other store enhancers if any
);

export let store=legacy_createStore(reducer,enhancer)