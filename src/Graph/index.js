import React from 'react'
import {connect} from 'react-redux'
import {Rect,Circle,Layer,Group,Stage} from 'react-konva'

import Node from './node'
import Edge from './edge'
import store from '../store'

class Graph extends React.Component {
    handleScrollWheel = (e) => {
        /* TODO: Scale stageX and stageY (zoom) */
    }
    handleStageDragStart = (e) => {
        // only change pointer on stage move, not shape move
        if(e.target.nodeType == "Stage") 
            e.target.content.style.cursor = 'move'
    }
    handleStageDragEnd = (e) => {
        if(e.target.nodeType == "Stage") {
            e.target.content.style.cursor = 'default'
            store.dispatch({
                type: "STAGE_MOVED",
                x: e.target.attrs.x,
                y: e.target.attrs.y
            })
        }

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
            <Stage
                draggable
                onDragStart={this.handleStageDragStart}
                onDragEnd={this.handleStageDragEnd}
                onWheel={this.handleScrollWheel}
                width={this.state.width}
                height={this.state.height}
                scaleX={this.props.graph.xScale}
                scaleY={this.props.graph.yScale}
                x={this.props.graph.xStage}
                y={this.props.graph.yStage}>
                <Layer>
                     <Group>
                        {edges}
                        {nodes}
                    </Group>
                </Layer>
            </Stage>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        nodes: state.nodes,
        edges: state.edges,
        graph: state.graph
    }
}


export default connect(mapStateToProps)(Graph)