import React, { Component } from 'react'
class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    

    render() { 
        console.log(this.props.dataSource)
        if(this.props.dataSource.length > 0)
        {
            return(
                <table className="table table-bordered table-striped">
                    <thead>
                    { 
                    
                        Object.keys(this.props.dataSource[0]).map((k) =>
                     <th>{  k  }</th>
                        )
                     
                     
                        
                    }
                    </thead>
                    <tbody>
                        {
                            this.props.dataSource.map((item) => 
                            <tr>{
                                Object.values(item).map((val)=> <td>{val}</td>)   
                            }</tr>
                            )
                        }
                    </tbody>
                </table>
                )
        }
        else
        {
            return(<table className="table table-bordered table-striped"></table>)
        }
        
    }
}
 
export default TableComponent;