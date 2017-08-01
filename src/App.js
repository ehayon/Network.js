import './App.css'

import React, {Component} from 'react'
import {Provider} from 'react-redux'

import {Layer,Rect,Stage,Group} from 'react-konva'

import store from './store'
import Graph from './Graph/graph'

store.dispatch({type: "ADD_NODE", name: "Node 3", id: 3, x: 350, y: 350})
store.dispatch({type: "ADD_NODE", name: "Node 4", id: 4, x: 400, y: 400})
store.dispatch({type: "ADD_NODE", name: "Node 5", id: 5, x: 500, y: 300})
store.dispatch({type: "ADD_NODE", name: "Node 6", id: 6, x: 100, y: 350})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stage width={700} height={700}>
          <Layer>
            <Graph />
          </Layer>
        </Stage>
      </Provider>
    );
  }
}

export default App

