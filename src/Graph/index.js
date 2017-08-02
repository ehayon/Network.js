import React from 'react'
import {connect} from 'react-redux'
import {Rect,Circle,Layer,Group} from 'react-konva'

import Node from './node'
import Edge from './edge'

class Graph extends React.Component {
    
    render() {
        return (
            <Group>
                {this.props.nodes.map((n, i) => {
                    return <Node key={n.id} id={n.id} name={n.name} x={n.x} y={n.y} />
                })}

                {this.props.edges.map((n, i) => {
                    return <Edge key={n.id} id={n.id} source={n.source} target={n.target} />
                })}
            </Group>
        )
    }
}

var mapStateToProps = (state) => {
    console.log(state)
    return {
        nodes: state.nodes,
        edges: state.edges
    }
}


export default connect(mapStateToProps)(Graph)