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

  handleScrollWheel = (e) => {
    /* TODO: Scale stageX and stageY (zoom) */
  }

  handleStageDragStart = (e) => {
    // only change pointer on stage move, not shape move
    if(e.target.nodeType == "Stage") 
      e.target.content.style.cursor = 'move'
  }

  handleStageDragEnd = (e) => {
    if(e.target.nodeType == "Stage")
      e.target.content.style.cursor = 'default'
  }

  updateWindowDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  componentWillMount = () => {
    this.updateWindowDimensions()

  }
  componentDidMount = () => {
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  render() {
    return (
      <Provider store={store}>
        <Stage 
          draggable 
          onDragStart={this.handleStageDragStart} 
          onDragEnd={this.handleStageDragEnd} 
          drawBorder 
          width={this.state.width} 
          height={this.state.height} 
          onWheel={this.handleScrollWheel}>
            <Layer>
              <Rect width={this.state.width} height={this.state.height} x={0} y={0} />
              <Graph />
            </Layer>
        </Stage>
      </Provider>
    );
  }
}

export default App

