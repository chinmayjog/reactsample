import React from 'react';
import DropDownComponent from './../components/selectcomponent/dropdoencomponent';
// define a pure function that will return DOM

// function SimpleHookComponent(props) {
//     return (
//     <div>The Simple Hook Component {props.name}</div>
//     );
// }

const SimpleHookComponent=(props)=>{
    const names = ['Tejas', 'Mahesh', 'Ramesh', 'Ram', 'Sabnis'];
    const clickButton=()=> {
            alert('Button is CLicked');
    }
    return (
        <div>
            The Simple Hook Component using Function Expression {props.name}
            <input type="button" value="Click Me" onClick={clickButton}/>
            <select className="form-control">
                {
                    names.map((n,i)=> (
                    <option key={i} value={n}>{n}</option>
                    ))
                }
            </select>
            <hr/>
            <DropDownComponent dataSource={names}></DropDownComponent>
            
        </div>
    );
}


export default SimpleHookComponent;