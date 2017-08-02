import './App.css'

import React, {Component} from 'react'
import {Provider} from 'react-redux'

import {Layer,Rect,Stage,Group} from 'react-konva'

import store from './store'
import Graph from './Graph'

for(var i=0; i<2; i++) {
    store.dispatch({
      type: "ADD_NODE",
      name: "Node " + i,   
      id: i,
      x: Math.floor(Math.random()*700),
      y: Math.floor(Math.random()*700)      
    })
}

store.dispatch({
  type: "ADD_EDGE",
  id: 0,
  source: 0,
  target: 1
})

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

