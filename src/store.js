import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'

const mid = applyMiddleware(thunkMiddleware, promiseMiddleware())

let store = createStore(reducer, mid, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    console.log("Store has changed state", store.getState())
})

window.store = store

export default store