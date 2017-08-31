import React, { Component } from "react";
import DiffComponent from './DiffComponent';

class Application extends Component {
    constructor () {
        super();
        this.state = {
            sourceToDestination: [],
            destinationToSource: []
        }

        this._showDifference = this._showDifference.bind(this)
    }

    render () {
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <DiffComponent
                        label="Source (E.g: Development/.env.example)"
                        ref="source"
                        diff_caption="Destination"
                        difference={this.state.destinationToSource} />

                    <DiffComponent
                        label="Destination (E.g; Production/.env)"
                        ref="destination"
                        diff_caption="Source"
                        difference={this.state.sourceToDestination} />
                </div>
                <div className = "row">
                    <div className = "col-md-12" style = {{ marginTop: "5px" }}>
                        <button type = 'button' className = 'btn btn-sm btn-info form-control' onClick = {this._showDifference}>
                            Show Difference
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    _showDifference () {
        const sourceMap = this._extractKeyValuePair(this.refs.source.getInputValue()),
            destinationMap = this._extractKeyValuePair(this.refs.destination.getInputValue());;

        const sourceToDestination = sourceMap.filter(x => destinationMap.indexOf(x) === -1);
        const destinationToSource = destinationMap.filter(x => sourceMap.indexOf(x) === -1);

        this.setState({
            sourceToDestination,
            destinationToSource
        });
    }

    _extractKeyValuePair (text) {
        let lines = text.split('\n');

        return lines.map((elem) => {
                        elem = elem.trim();

                        if(this._isComment(elem)) return '';

                        return this._splitLineToKeyValuePair(elem) || '';
                    }).filter((elem) => !this._isEmptyElement(elem))
    }

    _splitLineToKeyValuePair (text) {
        const splits = text.split(/=(.*)/);
        if ( splits.length >= 2 && splits[0] != '' ) {
            // key = 0, value = 1
            return splits[0];
        }
        return false;
    }

    _isEmptyElement (text) {
        return text.trim().length === 0;
    }

    _isComment (text) {
        return text.startsWith('#');
    }
}

export default Application;
