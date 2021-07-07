import React, { Component } from "react";

const _getDiffs = (items) => {
    //ADDED AN EXTRA '=' AFTER THE JOIN, OTHERWISE, AN EQUAL SIGN WILL BE MISSING
    return items.join('=\n').concat("=")
}

const Difference = (props) => {
    return (
        <div>
            {(props.difference.length > 0) &&
                <div style={{ marginTop: "5px" }}>
                    <h4>
                        Difference from {props.caption}: {props.difference.length} {props.difference.length > 1 ? "items" : "item"}
                    </h4>
                    <pre>{ _getDiffs(props.difference) }</pre>
                </div>
            }
        </div>
    )
}

export default Difference;
