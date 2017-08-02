import React from 'react'
import {connect} from 'react-redux'
import {Rect,Circle,Layer,Group} from 'react-konva'

import Node from './node'
import Edge from './edge'

class Graph extends React.Component {
    
    render() {
        let edges = this.props.edges.map((e, i) => {
            return (
                <Edge 
                    key={e.id} 
                    id={e.id} 
                    source={this.props.nodes.find(n => n.id == e.source)} 
                    target={this.props.nodes.find(n => n.id == e.target)} 
                    />
            )
        })

        let nodes = this.props.nodes.map((n,i) => {
            return (
                <Node 
                    key={n.id} 
                    id={n.id} 
                    name={n.name} 
                    x={n.x} 
                    y={n.y} 
                />
            )
        })

        return (
            <Group>
                {edges}
                {nodes}
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