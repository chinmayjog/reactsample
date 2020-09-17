import React, {Component} from 'react';
import MyChildComponent from  './mychildcomponent.jsx';
// class component
class SimpleComponent extends Component {
    constructor(props){
         super(props);
         this.state = {
             n1:10,
             n2:20,
             msg: 'Message from Simple Component'
         };
    }
    render(){
        return (
            <div className="container">
                  <h2>The Simple Component</h2>  
                  <div>
        <strong>{this.state.n1}</strong>
        <br/>
        <strong>{this.state.n2}</strong>
                  </div>
                  <br/>
                  <div>
                      <p>
                          <strong>
                              Value received from Parent {this.props.parentValue}
                          </strong>
                      </p>
                  </div>
                  <div>
                      <MyChildComponent info = {this.state.msg}></MyChildComponent>
                  </div>
            </div>
        );
    }
}
export default SimpleComponent;