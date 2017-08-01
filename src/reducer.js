const initialState = {
    nodes: [],
    edges: []
}



const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_NODE": {
            return {
                ...state, 
                nodes: [...state.nodes, 
                    {
                        name: action.name, 
                        id: action.id,
                        x: action.x,
                        y: action.y
                    }]
            }
        }
        case "REMOVE_NODE": {
            return {
                ...state,
                nodes: state.nodes.filter(n => n.id != action.id)
            }
            break;
        }
    }
    return state
}

export default reducer