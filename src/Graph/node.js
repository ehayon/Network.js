import React from 'react'
import {Circle} from 'react-konva'
import store from '../store'

export default class Node extends React.Component {
    handleDragStart = () => {
        // drag has started
    }

    handleDragEnd = (e) => {
        // update X,Y coordinates in store
        let pointerPosition = e.target.getStage().getPointerPosition()
    
        store.dispatch({
            type: "NODE_DRAGGED",
            id: this.props.id,
            x: pointerPosition.x,
            y: pointerPosition.y
        })
    }

    render () {
        //console.log("Rendering Node", this.props.name)
        return (
            <Circle 
                radius={this.props.radius || 10}
                fill={'green'}
                x={this.props.x}
                y={this.props.y}
                stroke={'black'}
                strokeWidth={1}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
            />
        )
    }
}