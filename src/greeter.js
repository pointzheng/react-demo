import React, {Component} from 'react';

class Hello extends Component {
    constructor(props){
        super(props);
        
        this.state = {
        	name: "World"
        }
    }
    
    getInitialState() {
        return {name: "World"};
    }
	
    handleClick() {
        var name = this.state.name;
        if (name == "World") {
            name = "React";
        } else {
            name = "World";
		}
        this.setState({name: name});
    }
    
    render() {
        return(<div onClick={this.handleClick.bind(this)}>Hello {this.state.name}</div>);
    }
}

export default Hello;
