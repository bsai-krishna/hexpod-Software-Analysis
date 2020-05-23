import React, { Component } from "react"
import LegPoseWidget from "./LegPoseWidgetDefault"
import { Card } from "./generic/SmallWidgets"

class ForwardKinematicsWidgets extends Component {
    pageName = "Forward Kinematics"

    componentDidMount() {
        this.props.onMount(this.pageName)
    }

    makeRow = (legName1, legName2) => (
        <div className="row-container">
            {[legName1, legName2].map(name => (
                <LegPoseWidget
                    key={name}
                    name={name}
                    pose={this.props.pose[name]}
                    onUpdate={this.props.onUpdate}
                />
            ))}
        </div>
    )

    render = () => (
        <Card title={this.pageName} h="h2">
            {this.makeRow("leftFront", "rightFront")}
            {this.makeRow("leftMiddle", "rightMiddle")}
            {this.makeRow("leftBack", "rightBack")}
        </Card>
    )
}

export default ForwardKinematicsWidgets
