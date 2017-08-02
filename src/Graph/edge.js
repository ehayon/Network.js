import React from 'react'
import {Line} from 'react-konva'

export default class Edge extends React.Component {
    render() {
        /* Draw an edge between props.source and props.target */
        console.log(this.props)
        return <Line /> /* placeholder for now */
    }
}