import React from 'react'
import {Group,Line,Circle} from 'react-konva'

export default class Edge extends React.Component {
    /* TODO: Make sure duplicate edges are
             not stacked top of eachother */

    render() {
        /* Draw an edge between props.source and props.target */
        
        // Calculate midpoint of the line
        let midpoint = {}
        midpoint.x = (
            Math.floor((this.props.source.x + this.props.target.x) / 2)
        )
         midpoint.y = (
            Math.floor((this.props.source.y + this.props.target.y) / 2)
        )
        return (
            <Group>
                <Line 
                    points={[
                        this.props.source.x,
                        this.props.source.y,
                        this.props.target.x,
                        this.props.target.y
                    ]}
                    stroke='red'
                />
                <Circle 
                    radius={this.props.radius || 5}
                    fill={'blue'}
                    x={midpoint.x}
                    y={midpoint.y}
                    stroke={'black'}
                    strokeWidth={1}
                />
            </Group>
        )
    }
}