import React from 'react'
import {Rect,Circle,Layer,Group} from 'react-konva'

class Graph extends React.Component {
    
    render() {
        return (
            <Group>
                <Node x={200} y={300} />
                <Node x={500} y={300} />
            </Group>
        )
    }
}

class Node extends React.Component {
    handleDragStart = () => {
        console.log("Drag start")
    }

    handleDragEnd = () => {
        console.log("Drag end")
    }

    render () {
        return (
            <Circle 
                radius={this.props.radius || 50}
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

export default Graph