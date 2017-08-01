import React from 'react'
import {connect} from 'react-redux'
import {Rect,Circle,Layer,Group} from 'react-konva'

import Node from './node'

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

var mapStateToProps = (state) => {
    return {
        nodes: state.nodes,
        edges: state.edges
    }
}


export default connect(mapStateToProps)(Graph)