import React from 'react'
import {Circle} from 'react-konva'
import store from '../store'

export default class Node extends React.Component {
    handleDrag = (e) => {
        // update X,Y coordinates in store
        let xPos = e.target.attrs.x
        let yPos = e.target.attrs.y

        store.dispatch({
            type: "NODE_DRAGGED",
            id: this.props.id,
            x: xPos,
            y: yPos
        })
    }
    handleDragEnd = (e) => {

    }

    render () {
        return (
            <Circle 
                radius={this.props.radius || 10}
                fill={'green'}
                x={this.props.x}
                y={this.props.y}
                stroke={'black'}
                strokeWidth={1}
                draggable
                onDragEnd={this.handleDragEnd}
                onDragMove={this.handleDrag}
            />
        )
    }
}