const initialState = {
    nodes: [
        {
            id: 1,
            name: 'Node 1',
            x: 150,
            y: 150
        }
    ],
    edges: [
        {
            source: 1,
            target: 2
        },
        {
            source: 2,
            target: 3
        }
    ]
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_NODE": {
            console.log("Add node")
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
    }
}

export default reducer