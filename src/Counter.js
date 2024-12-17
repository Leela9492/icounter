import React from 'react';
import './Counter.css'

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:10
        }
    }
    Increment(){
        if(this.state.count<100){
            this.setState({
                count:this.state.count+1
            });
        }
    }
    Decrement(){
        if(this.state.count>0){
            this.setState({
                count:this.state.count-1
            });
        }
    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.Increment.bind(this)}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.Decrement.bind(this)}>Decrement</button>
            </>
        );
    }
}
export default Counter;