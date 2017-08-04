import './App.css'

import React, {Component} from 'react'
import {Provider} from 'react-redux'

import {Layer,Rect,Stage,Group} from 'react-konva'

import store from './store'
import Graph from './Graph'

for(var i=0; i<20; i++) {
  store.dispatch({
    type: "ADD_NODE",
    name: "Node " + i,   
    id: i,
    x: Math.floor(Math.random()*2000),
    y: Math.floor(Math.random()*2000)      
  })
}
for(var i=0; i<10; i++) {
  store.dispatch({
    type: "ADD_EDGE",
    id: i,
    source: Math.floor(Math.random()*20),
    target: Math.floor(Math.random()*20)
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

