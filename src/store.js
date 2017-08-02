import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'

const middleware = applyMiddleware(thunkMiddleware, promiseMiddleware())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, undefined, composeEnhancers(middleware))

window.store = store

export default store