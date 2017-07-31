export const ADD_EDGE = 'ADD_EDGE'
export const ADD_NODE = 'ADD_NODE'

export function addNode(name) {
    return {
        type: ADD_NODE,
        name: name
    }
}