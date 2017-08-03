import React from 'react'
import {Group,Line,Circle} from 'react-konva'

export default class Edge extends React.Component {
    /* TODO: Make sure duplicate edges are
             not stacked top of eachother */

    buildAnchor = (source, target, anchorDistance) => {
        // find midpoint of the line
        let midpoint = {}
        midpoint.x = (
            Math.floor((source.x + target.x) / 2)
        )
         midpoint.y = (
            Math.floor((source.y + target.y) / 2)
        )
        // find negative reciprocal of slope => perpendicular bisector to midpoint
        const invSlope = -1 *
            (target.x - source.x) / 
            (target.y - source.y)
           
        let anchorPt = {}
        
        if (invSlope == -Infinity || invSlope == Infinity) {
            anchorPt.x = midpoint.x
            anchorPt.y = midpoint.y + anchorDistance
        } else {
            let x_p = (anchorDistance) / Math.sqrt(1 + Math.pow(invSlope, 2))
            anchorPt.x = midpoint.x + x_p
            anchorPt.y = midpoint.y + (invSlope * x_p)
        }
        return anchorPt
    }

    render() {
        /* Draw an edge between props.source and props.target */
        return (
            <Group>
                <Line 
                    points={[
                        this.props.source.x,
                        this.props.source.y,
                        this.buildAnchor(this.props.source, this.props.target, 20).x,
                        this.buildAnchor(this.props.source, this.props.target, 20).y,
                        this.props.target.x,
                        this.props.target.y
                    ]}
                    bezier={true}
                    tension={0.8}
                    stroke='red'
                />

                <Line 
                    points={[
                        this.props.source.x,
                        this.props.source.y,
                        this.buildAnchor(this.props.source, this.props.target, -20).x,
                        this.buildAnchor(this.props.source, this.props.target, -20).y,
                        this.props.target.x,
                        this.props.target.y
                    ]}
                    bezier={true}
                    tension={0.8}
                    stroke='red'
                />

                
            </Group>
        )
    }
}