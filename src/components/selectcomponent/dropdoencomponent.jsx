import React, { Component } from 'react'
class DropDownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleChange=(evt)=> {
        // selectedValue is a method that will executed 
        // when the handleChange evebnt is raised on current component
        // the parent component must subscribe to 'selectedValue'
        // using method
        this.props.selectedValue(evt.target.value);
    }
    render() { 
        return (
            <div className="container">
                <select className="form-control" value={this.props.data}
                 onChange={this.handleChange.bind(this)}>
                    {
                        this.props.dataSource.map((v,i)=> (
                        <option key={i} value={v}>{v}</option>
                        ))
                    }
                </select>
            </div>
        );
    }
}
 
export default DropDownComponent;