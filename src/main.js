import Hello from './greeter.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo1 extends Component {
    render() {
    	
    	console.log("jquery is:" + window.jQuery + ",length:" + $(".test").length);
        return (
            <input defaultValue={this.props.value} />
        )
    }
}

ReactDOM.render(
    <Demo1 value={"test"} />,
    document.getElementById('root')
);
