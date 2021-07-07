import React, { Component } from "react";
import Difference from './Difference';

export default class DiffComponent extends Component {
    constructor(props) {
        super(props);
    }

    getInputValue() {
        return this.refs.text.value.trim();
    }

    render() {
        return (
            <div className = "col-sm-6">
                <h4 className='alert alert-info text-center'>{this.props.label}</h4>
                <textarea rows='10' className='form-control' ref='text'></textarea>
                <Difference
                    caption={this.props.diff_caption}
                    difference={this.props.difference}
                />
            </div>
        )
    }
}
