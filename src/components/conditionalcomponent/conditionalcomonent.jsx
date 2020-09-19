import React, { Component } from 'react'

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            show: true
        }
    }
    toggle=()=> {
        if(this.state.show) {
            this.setState({show:false});
                     } else {
            this.setState({show:true});    
             
        }
    }
    render() { 
        if(this.state.show){
            return (  
                <div>
                    <input type="button" value="Toggle" onClick={this.toggle.bind(this)}/>
                    <hr/>
                     <Child1Component></Child1Component>
                </div>    
                );
        } else {
            return (  
                <div>
                    <input type="button" value="Toggle" onClick={this.toggle.bind(this)}/>
                    <hr/>
                     <Child2Component></Child2Component>
                </div>    
                );
        }

        
        
    }
}

class Child1Component extends Component {
    constructor(props) {
        super(props);
        this.state = {
              x1:0,
              y1:0  
        }
    }
    detectMousePostion=(evt)=> {
        this.setState({x1:evt.clientX});
        this.setState({y1:evt.clientY});
    }
    componentDidMount=()=> {
        window.addEventListener('mousemove', this.detectMousePostion);
    }
    render() { 
        return ( 
            <div>
                Child Component 1
        <p>X:{this.state.x1} and Y:{this.state.y1}</p>
            </div>
        );
    }
}


class Child2Component extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p>
                    Child Component 2
                </p>
            </div>
        );
    }
}
 
   
export default ParentComponent;