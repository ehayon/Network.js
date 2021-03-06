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
    x: Math.floor(Math.random()*500),
    y: Math.floor(Math.random()*500),
    label: "Node " + i      
  })
}
for(var i=0; i<1; i++) {
  store.dispatch({
    type: "ADD_EDGE",
    id: i,
    source: Math.floor(Math.random()*2),
    target: Math.floor(Math.random()*2),
    label: "Test Label"
  })
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Graph />
      </Provider>
    );
  }
}

export default App

