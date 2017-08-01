import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'

const mid = applyMiddleware(thunkMiddleware, promiseMiddleware())

let store = createStore(reducer, mid)

store.subscribe(() => {
    console.log("Store has changed state", store.getState())
})

export default store