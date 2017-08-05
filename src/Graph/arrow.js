import React from 'react' 
import {Line} from 'react-konva'

export default class Arrow extends React.Component {
    getAngle = (source, target) => {
        return Math.atan2(target.y-source.y, target.x-source.x)
    }

    render() {
        console.log(this.getAngle(this.props.source, this.props.target))
        return (
            <Line 
                points={[
                    this.props.source.x,
                    this.props.source.y,
                    this.props.target.x,
                    this.props.target.y
                ]}
                stroke={'blue'}
            />
        )
    }
}