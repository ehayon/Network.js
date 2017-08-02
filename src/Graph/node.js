import React from 'react'
import {Circle} from 'react-konva'
import store from '../store'

export default class Node extends React.Component {
    handleDragStart = () => {
        // drag has started
    }

    handleDragEnd = (e) => {
        // update X,Y coordinates in store
        console.log(e.target)
        let xPos = e.target.attrs.x
        let yPos = e.target.attrs.y

        store.dispatch({
            type: "NODE_DRAGGED",
            id: this.props.id,
            x: xPos,
            y: yPos
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