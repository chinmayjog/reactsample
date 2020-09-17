import React,{Component} from 'react';
class MyChildComponent extends Component {
    render(){
        return (
            <div>
                <h3>The My Child Component</h3>
                <p>
        <strong>{this.props.info}</strong>
                </p>
            </div>
        );
    }
}

export default MyChildComponent;