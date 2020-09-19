import React, {useContext} from 'react';
import { DataContext } from './datacontext';
const ListComponent=()=>{
    // subscribe to DataContext to read the data
    // useContext() is object using which component will
    // subscribe to data 
    const receivedValue = useContext(DataContext); 

    // reading the array
    const dataSource = receivedValue[Object.keys(receivedValue)[0]]; // products array
    const method = receivedValue[Object.keys(receivedValue)[1]]; // method

    console.log(`Data    is ${JSON.stringify(dataSource)}`);
    console.log(`Method  is ${method}`);
    
  return (
      <div className="container">
          <h2>The List of Data</h2>
          {JSON.stringify(receivedValue)}

          <ul>
              {
                  dataSource.map((v,i)=> (
                      <li key={i}>
                          <span>{JSON.stringify(v)}</span>
                      </li>
                  ))
              }
          </ul>
          
      </div>
  );
};

export default ListComponent;