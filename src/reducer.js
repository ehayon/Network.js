const initialState = {}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case "ADD_NODE": {
            console.log("Add node")
            return state
        }
    }
}