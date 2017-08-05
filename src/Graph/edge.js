import React from 'react'
import {Group,Line,Circle,Text} from 'react-konva'

import Arrow from './arrow'

export default class Edge extends React.Component {
    /* TODO: Make sure duplicate edges are
             not stacked top of eachother */

    getMidpoint = (source, target) => {
        let midpoint = {}
        midpoint.x = (
            Math.floor((source.x + target.x) / 2)
        )
         midpoint.y = (
            Math.floor((source.y + target.y) / 2)
        )
        return midpoint
    }

    buildAnchor = (source, target, anchorDistance) => {
        // find midpoint of the line
        let midpoint = this.getMidpoint(source, target)
        
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

    getAngle = (source, target) => {
        return Math.atan2(target.y-source.y, target.x-source.x)
    }

    getDistance = (source, target) => {  
        return (
            Math.sqrt(
                Math.pow(target.x - source.x, 2) + 
                Math.pow(target.y - source.y, 2)
            )
        )
    }

    render() {
        /* Draw an edge between props.source and props.target */
        
        let anchor = this.buildAnchor(
            this.props.source, 
            this.props.target, 
            20
        )

        let angle = this.getAngle(this.props.source, this.props.target)
        angle *= (180/Math.PI)

        let midpoint = this.getMidpoint(this.props.source, this.props.target)
        
        if ((angle <= -90 && angle >= -180) || (angle >= 90 && angle <= 180))
            angle += 180;
            
        
        return (
            <Group>
                <Text
                    text={this.props.label}
                    x={midpoint.x}
                    y={midpoint.y}
                    offsetY={20}
                    offsetX={100}
                    width={200}
                    align={'center'}
                    fontSize={14}
                    fontFamily={'Sans-serif'}
                    fill={'green'}
                    rotation={angle}
                />
                <Line 
                    points={[
                        this.props.source.x,
                        this.props.source.y,
                        this.props.target.x,
                        this.props.target.y,                        
                    ]}
                    stroke='red'
                    strokeWidth={3}
                />     
            </Group>
        )
    }
}

/*

                 <Arrow 
                    source={this.props.source}
                    target={this.props.target}
                />       
                */