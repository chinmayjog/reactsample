import React, {useState} from 'react';
import ListComponent from './listhookcomponent';
import {DataContext} from './datacontext';
const ProductHookCompponent=()=>{
    // define local state for the hook
    // ES 6 Destructuring 
    // product: is the state object
    // updateProduct: the dispatch action taht will update the initial state of state object
    // useState({}): {} an initial value of the state object
    const [product, updateProduct] = useState({
        ProductId:0, ProductName: ''
    });
    const [products, addProduct] = useState([]);

    const clear=()=> {
        updateProduct({ProductId:0, ProductName: ''});
    }

    const save=()=>{
        // call the addProduct() to mutate the products state object
        // dispatch function used to update teh state object defined using useState() 
        addProduct([...products, { ProductId: product.ProductId, ProductName: product.ProductName}]); 

        console.log(`Porducts ${JSON.stringify(products)}`);
    }

    // updateProduct({...product, ProductId: parseInt(evt.target.value)})}
    // ...product: the spread operation, used to build a mutable object, internally 
    // product = Object.copy(product, {product.ProductId})
    return (
        <div className="container">
              <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" className="form-control"  
                        name="ProductId" value={product.ProductId}   
                        onChange={(evt)=>{updateProduct({...product, ProductId: parseInt(evt.target.value)})}}
                         />
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" 
                        name="ProductName" value={product.ProductName}
                        onChange={(evt)=>{updateProduct({...product, ProductName: evt.target.value})}}
                         />
                    </div>
                    <div className="form-group"> 
                        <input type="button" value="Clear" className="btn btn-warning" onClick={clear}/>
                        <input type="button" value="Save" className="btn btn-danger" onClick={save}/>
                    </div>
                    <hr/>

                    <DataContext.Provider value={{products, updateProduct}}>
                      <ListComponent></ListComponent>
                    </DataContext.Provider>
        </div>
    );
};


export default ProductHookCompponent;
