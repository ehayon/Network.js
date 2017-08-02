import {combineReducers} from 'redux'

const initialNodeState = []
const initialEdgeState = []

const nodeReducer = (state=initialNodeState, action) => {
    switch(action.type) {
        case "ADD_NODE": {
            return [...state, {
                name: action.name, 
                id: action.id,
                x: action.x,
                y: action.y
            }]   
        }
        case "REMOVE_NODE": {
            return state.filter(n => n.id != action.id)
        }
        case "NODE_DRAGGED": {
            return state.map(n => (n.id == action.id) ? {...n, x: action.x, y: action.y} : n)
        }
    }
    return state
}

const edgeReducer = (state=initialEdgeState, action) => {
    switch(action.type) {
        case "ADD_EDGE": {
            return [...state, {
                source: action.source,
                target: action.target
            }]
        }
    }
    return state
}

export default combineReducers({
    nodes: nodeReducer,
    edges: edgeReducer
})