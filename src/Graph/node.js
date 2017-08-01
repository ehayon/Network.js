import React from 'react'
import {Circle} from 'react-konva'

export default class Node extends React.Component {
    handleDragStart = () => {
        console.log("Drag start")
    }

    handleDragEnd = () => {
        console.log("Drag end")
    }

    render () {
        console.log("Rendering Node")
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