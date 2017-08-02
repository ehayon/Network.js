import React from 'react'
import {Line} from 'react-konva'

export default class Edge extends React.Component {
    render() {
        /* Draw an edge between props.source and props.target */
        return <Line 
            points={[
                this.props.source.x,
                this.props.source.y,
                this.props.target.x,
                this.props.target.y
            ]}
            stroke='red'
            />
    }
}