import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'

const mid = applyMiddleware(thunkMiddleware, promiseMiddleware())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, undefined, composeEnhancers(mid))

store.subscribe(() => {
    //console.log("Store has changed state", store.getState())
})

window.store = store

export default store