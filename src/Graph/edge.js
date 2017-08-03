import React from 'react'
import {Group,Line,Circle} from 'react-konva'

export default class Edge extends React.Component {
    /* TODO: Make sure duplicate edges are
             not stacked top of eachother */

    render() {
        /* Draw an edge between props.source and props.target */
        
        // find midpoint of the line
        let midpoint = {}
        midpoint.x = (
            Math.floor((this.props.source.x + this.props.target.x) / 2)
        )
         midpoint.y = (
            Math.floor((this.props.source.y + this.props.target.y) / 2)
        )
        // find negative reciprocal of slope => perpendicular bisector to midpoint
        // -(x2-x1)/(y2-y1)
        const invSlope = -1 *
            (this.props.target.x - this.props.source.x) / 
            (this.props.target.y - this.props.source.y)
        
        const anchorDistance = -50
        let anchorPt = {}
        
        if (invSlope == -Infinity || invSlope == Infinity) {
            anchorPt.x = midpoint.x
            anchorPt.y = midpoint.y + anchorDistance
        } else {
            let x_p = (anchorDistance) / Math.sqrt(1 + Math.pow(invSlope, 2))
            anchorPt.x = midpoint.x + x_p
            anchorPt.y = midpoint.y + (invSlope * x_p)
        }

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
                <Line 
                    points={[
                        midpoint.x,
                        midpoint.y,
                        anchorPt.x,
                        anchorPt.y
                    ]}
                    stroke='blue'
                />
            </Group>
        )
    }
}