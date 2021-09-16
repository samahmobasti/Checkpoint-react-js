import React , {Component} from 'react';
class St extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            number:0
         }
    }
    addition = () =>{
        this.setState({number:this.state.number + 1});
    }
    
    soustraction = () =>{
        this.setState({number:this.state.number - 1});
    }
    reset = () =>{
        this.setState({number:0});
    }
    
    render() { 
       
        return ( 
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.addition}>+</button>
                <br />
                <button onClick={this.soustraction}>-</button>
                <br />
                <button onclick={this.reset}>Reset</button>
            </div>
         );
    }
}
 
export default St;


