import React, { Component } from "react";

class Difference extends Component {
    constructor () {
        super();
    }

    render () {
        if ( this.props.difference.length ) {
            return (
                <div style = {{ marginTop: "5px" }}>
                    <h4>Difference from {this.props.caption} - {this.props.difference.length} items</h4>
                    {/* ADDED AN EXTRA = AFTER THE JOIN, OTHERWISE, AN EQUAL SIGN WILL BE MISSING */}
                    <pre>{ this.props.difference.join('=\n') + "="}</pre>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Difference;