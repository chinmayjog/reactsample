import React, { Component } from 'react'

class TableGridComppnent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleRowClick=(row)=> {
        this.props.selectRow(row);
    }
    render() { 
        // read rows from the dataSource
        if(this.props.dataSource.length <= 0) {
            return (<div>No Records in data source</div>)  
        } else {
         let columns =[];
         // read properties of the 0th index row from data Source
         for(const c of Object.keys(this.props.dataSource[0])) {
             columns.push(c);
         }       
        return (  
            <div className="container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {
                                columns.map((col,idx)=> (
                                <td key={idx}>{col}</td>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.props.dataSource.map((row, index)=> (
                               <tr key={index} onClick={()=>this.handleRowClick(row)}>
                                   {
                                       columns.map((col,idx)=> (
                                       <td key={idx}>{row[col]}</td>
                                       ))
                                   }
                                   
                               </tr> 
                           ))
                       }
                    </tbody>   
                </table>
            </div>
        );
        }
    }
}
 
export default TableGridComppnent;