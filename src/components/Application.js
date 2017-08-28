import React, { Component } from "react";
import Difference from './Difference';

class Application extends Component {
    constructor () {
        super();
        this.difference = {
            source: [],
            destination: []
        };
        this.state = {
            sourceToDestination: [],
            destinationToSource: []
        }
    }

    render () {
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <div className = "col-sm-6">
                        <h4 className = 'alert alert-info text-center'>Source (E.g: Development/.env.example)</h4>
                        <textarea rows = '10' className = 'form-control' ref = 'source'></textarea>
                        <Difference caption='Destination' difference={this.state.destinationToSource}/>
                    </div>
                    <div className = "col-sm-6">
                        <h4 className = 'alert alert-info text-center'>Destination (E.g; Production/.env)</h4>
                        <textarea rows = '10' className = 'form-control' ref = 'destination'></textarea>
                        {<Difference caption='Source' difference={this.state.sourceToDestination}/>}
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-md-12" style = {{ marginTop: "5px" }}>
                        <button type = 'button' className = 'btn btn-sm btn-info form-control' onClick = {this.showDifference.bind(this)}>
                            Show Difference
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    showDifference () {
        let source = this.refs.source.value.trim(),
            destination = this.refs.destination.value.trim();
        if ( "" != source ) {
            // source has values
            this.difference.source = this.extractKeyValuePair(source);
        }
        if ( "" != destination ) {
            // destination has values
            this.difference.destination = this.extractKeyValuePair(destination);
        }
        let sourceToDestination = this.difference.source.filter(x => this.difference.destination.indexOf(x) == -1);
        let destinationToSource = this.difference.destination.filter(x => this.difference.source.indexOf(x) == -1);
        this.setState({
            sourceToDestination,
            destinationToSource
        });
    }

    extractKeyValuePair (text) {
        let lines = text.split('\n');
        let outcome = [];
        for ( let index in lines ) {
            let line = lines[index];
            if ( !this.isComment(line) && !this.isEmptyLine(line) ) {
                let key = this.splitLineToKeyValuePair(line);
                if ( false == key ) {
                    continue;
                }
                outcome.push(key);
            }
        }
        return outcome;
    }

    splitLineToKeyValuePair (text) {
        let splits = text.split(/=(.*)/);
        if ( splits.length >= 2 && splits[0] != '' ) {
            // key = 0, value = 1
            return splits[0];
        }
        return false;
    }

    isEmptyLine (text) {
        return text.trim().length == 0;
    }

    isComment (text) {
        return text.startsWith('#');
    }
}

export default Application;