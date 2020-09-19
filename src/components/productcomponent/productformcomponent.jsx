import React, { Component } from 'react'
import DropDownComponent from './../selectcomponent/dropdoencomponent';
import TableGridComponent from './../datagridcomponent/tablecomponent';
import {Categories, Manufacturers} from './.././../mdoels/constants';
import { Logic} from './../../mdoels/logic';
class ProductFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            ProductId:0,
            ProductName: '',
            CategoryName: '',
            Manufacturer: '',
            Price: 0,
            categories: Categories,
            manufacturers: Manufacturers,
            products: [{ProductId:1, ProductName: 'Laptop', CategoryName: 'Electroics', Manufacturer: 'HP', Price:200000},
            {ProductId:2, ProductName: 'Iron', CategoryName: 'Electrical', Manufacturer: 'Bajaj', Price:2000},
            {ProductId:3, ProductName: 'Biscuts', CategoryName: 'Food', Manufacturer: 'Parle', Price:20},
            {ProductId:4, ProductName: 'Router', CategoryName: 'Electroics', Manufacturer: 'IBM', Price:5000},
            {ProductId:5, ProductName: 'Mixer', CategoryName: 'Electrical', Manufacturer: 'TATA', Price:2000},
            {ProductId:6, ProductName: 'Las', CategoryName: 'Food', Manufacturer: 'Parle', Price:1000}],
            manufacturersData:[
                {Id:1001, Name: 'Microsoft'}, {Id:102,Name:'Oracle'}
            ]

        };
        this.logic = new Logic();
    }
    // when an event is raised on UI element
    // the state property wll be updated based on name of the UI element
    // the matches with the state property name
    handleChange =(evt)=> {
        // update the state property
        this.setState({[evt.target.name]: evt.target.value});
    }
    clear =()=> {
        this.setState({ProductId:0});
        this.setState({ProductName:''});
        this.setState({CategoryName:''});
        this.setState({Manufacturer:''});
        this.setState({Price:0});

    }
    getCategory=(val)=> {
        this.setState({CategoryName: val}, ()=> {});
    }
    getManufacturer=(val)=> {
        this.setState({Manufacturer: val}, ()=>{});
    }
    getSelectedRow=(prd)=>{
        this.setState({ProductId:prd.ProductId});
        this.setState({ProductName:prd.ProductName});
        this.setState({CategoryName:prd.CategoryName});
        this.setState({Manufacturer:prd.Manufacturer});
        this.setState({Price:prd.Price});
    }
    save=()=> {
        
        let prd = {
            ProductId: this.state.ProductId,
            ProductName: this.state.ProductName,
            CategoryName: this.state.CategoryName,
            Manufacturer: this.state.Manufacturer,
            Price: this.state.Price
        };
        // define a temp array having same structire of the products array in state

        let tempProduct = this.state.products.slice();
        // push data in temp array
        tempProduct.push(prd);
        // update the products state
        this.setState({products: tempProduct}, ()=>{}); 
        alert(JSON.stringify(this.state.products));
    }
    render() { 
        return (
            <div className="container">
                <form name="frmProduct">
                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" className="form-control" value={this.state.ProductId}
                        name="ProductId"  required={true}
                        onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" 
                        name="ProductName"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.ProductName}/>
                    </div>
                    <div className="form-group">
                        <label>Category Name</label>
                        <DropDownComponent dataSource={this.state.categories}
                         data={this.state.CategoryName}
                         selectedValue={this.getCategory.bind(this)}></DropDownComponent>
                        {/* <select type="text" className="form-control" 
                        name="CategoryName"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.CategoryName}>
                            {
                                this.state.categories.map((v,i)=> (
                                <option key={i} value={v}>{v}</option>
                                ))
                            }
                        </select> */}
                    </div>
                    <div className="form-group">
                        <label>Manufacturer</label>
                        <DropDownComponent  dataSource={this.state.manufacturers}
                        data={this.state.Manufacturer}
                        selectedValue={this.getManufacturer.bind(this)}></DropDownComponent>
                        {/* <select type="text" className="form-control" 
                        name="Manufacturer"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.Manufacturer}>
                              {
                                this.state.manufacturers.map((v,i)=> (
                                <option key={i} value={v}>{v}</option>
                                ))
                            }
                        </select> */}
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" 
                        name="Price"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.Price}/>
                    </div>
                    <div className="form-group">
                       <input type="button" value="Clear" className="btn btn-warning" onClick={this.clear.bind(this)}/>
                       <input type="button" value="Save" className="btn btn-success" onClick={this.save.bind(this)}/>
                    </div>
                </form>
                <br/>
                <TableGridComponent dataSource={this.state.products}
                 selectRow={this.getSelectedRow.bind(this)}
                  canDeleteRow={true}></TableGridComponent>     
                 <br/>
                 <TableGridComponent dataSource={this.state.manufacturersData}></TableGridComponent>   
                {/* <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                this.state.products.map((prd,i)=> (
                                    <tr key={i}>
                                        <td>{prd.ProductId}</td>
                                        <td>{prd.ProductName}</td>
                                    </tr>
                                ))
                            }
                        
                    </tbody>
                </table> */}
            </div>
        );
    }
}
 
export default ProductFormComponent;
