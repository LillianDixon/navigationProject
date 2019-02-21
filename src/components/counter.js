import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
        
        this.countClick = this.countClick.bind(this);
    }

    countClick(){
        this.setState({
           count: this.state.count + 1
        });
    };
    
    render(){
        return(
            <div>
                <h4>This is my counter button</h4>
                <button onClick={this.countClick}>Count</button>
                <p>Current Count: {this.state.count}</p>
            </div>
        )
    }
}