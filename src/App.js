import './App.css'

import React, {Component} from 'react'
import {Layer,Rect,Stage,Group} from 'react-konva'

import store from './store'
import Graph from './graph'

store.dispatch({type: "ADD_NODE", name: "Ethan"})


class App extends Component {
  render() {
    return (
      <Stage width={700} height={700}>
        <Layer>
          <Graph />
        </Layer>
      </Stage>
    );
  }
}

export default App
