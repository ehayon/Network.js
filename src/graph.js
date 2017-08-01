import React from 'react'
import {connect} from 'react-redux'
import {Rect,Circle,Layer,Group} from 'react-konva'

class Graph extends React.Component {
    
    render() {
        console.log(this.props.nodes)

        return (
            <Group>
                {this.props.nodes.map((n, i) => {
                    return (<Node key={n.id} x={n.x} y={n.y} />)
                })}
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

var mapStateToProps = (state) => {
    return {
        nodes: state.nodes,
        edges: state.edges
    }
}


export default connect(mapStateToProps)(Graph)