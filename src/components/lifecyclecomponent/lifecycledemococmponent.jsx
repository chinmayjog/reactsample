import React, { Component } from 'react'
import MyChildComponent from '../mychildcomponent';
class LifecycleParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            pValue:0
        };
    }
    componentDidMount=()=> {
        console.log('Parent Component is mounted');
    }
    componentDidUpdate=()=> {
        console.log('Parent Component did update');
    }
    render() {
        if(this.state.pValue % 2 === 0){
               return (
                   <div className="container">
                       <input type="text" value={this.state.pValue}
                       className="form-control"
                        onChange={(evt)=> {this.setState({pValue:evt.target.value})}}/>
                        <MyChild1Component></MyChild1Component>
                   </div>
               ); 
        } else {
            return (
                <div className="container">
                    <input type="text" value={this.state.pValue}
                    className="form-control"
                     onChange={(evt)=> {this.setState({pValue:evt.target.value})}}/>
                     <MyChild2Component data={this.state.pValue}></MyChild2Component>
                </div>
            ); 
        }
        // return (  
        //     <div className="container">
        //         <input type="text" value={this.state.pValue} 
        //         onChange={(evt)=> {this.setState({pValue:evt.target.value})}}/>
        //         <br/>
        //         <div>
        //             <span>
        // <strong>{this.state.pValue}</strong>
        //             </span>
        //         </div>
        //     </div>
        // );
    }
}



class MyChild1Component extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            x:0,
            y:0
        };
    }
    captureMousePosition=(evt)=> {
        this.setState({x:evt.clientX});
        this.setState({y:evt.clientY});
        console.log(`Captured Mouse Positions X = ${this.state.x} and Y = ${this.state.y}`);
    }
    // all event subscriptions
    // AJAX Calls Subscriptions
    componentDidMount=()=>{
        console.log('My Child Component 1 is mounted');
        window.addEventListener('mousemove', this.captureMousePosition);
    }
    componentDidUpdate=()=>{
        console.log('My Child Componet 1 is updated');
    }
    // all clenup operations
    componentWillUnmount=()=> {
        console.log('My Chiled 1 Component is umounted');
        window.removeEventListener('mousemove', this.captureMousePosition);
    }
    render() { 
        return ( 
            <div className="container">
                <span>
                    Mouse Pointer Position
                    <strong>
                        X = {this.state.x} &&& Y = {this.state.y}
                    </strong>
                </span>
            </div>
         );
    }
}
 
 class MyChild2Component extends Component {
     constructor(props) {
         super(props);
         this.state = { 
            componentState:0
          };
     }
     componentDidMount=()=>{
        console.log('My Child Component 2 is mounted');
        
    }
    componentDidUpdate=()=>{
        console.log('My Child Componet 2 is updated');
    }
     render() { 
         return (
             <div>
                 <h2>The My Child Compnent 2</h2>
                 <div>
                     {this.props.data}
                 </div>
             </div>
           );
     }
 }
  
 
 
export default LifecycleParentComponent;