import React, { Component } from 'react'
class FormValidationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            EmpNo:0,
            EmpName: '',
            isEmpNoValid: true,
            isEmpNameValid:true,
            isFormValid:true,
            validations:[
                {PropertyName:"EmpNo", ConditionType: 'NumericValue', Condition:'<0', Message:"Value should be > 0"},
                {PropertyName:"EmpNo",  ConditionType: 'Length', Condition:'>5', Message:"Value should have length < 5"},
                {PropertyName:"EmpNo",  ConditionType: 'StringValue', Condition:'==""', Message:"Value should not be blank"},
                {PropertyName:"EmpName", ConditionType: 'StringValue', Condition:'==""', Message:"Value should not be blank"},
                {PropertyName:"EmpName",  ConditionType: 'Length', Condition:'>10', Message:"Value should have length < 10"},
            ],
            errorMessages:[],
            invalidFields:{}
        };
    }
    
    handleInputChanges=(evt)=> {
        this.setState({[evt.target.name]:evt.target.value});
        this.validateForm(evt.target.name, evt.target.value);
    }
    // contains validation rules for execution
    validateForm(name,value){
        this.state.validations.map((validator)=> {
            console.log(this.state.errorMessages)
            console.log(this.state.isFormValid)
            if(validator.PropertyName === name){
                if(validator.ConditionType==='NumericValue'){
                    let cond = parseInt(value)+validator.Condition;
                    console.log(cond);
                    if(eval(cond)){
                        this.setState({isFormValid:false})
                        this.setState({errorMessages:[...this.state.errorMessages,`${validator.PropertyName}:${validator.Message}`]})
                        let invFields = this.state.invalidFields;
                        invFields[name]=true
                        this.setState({invalidFields:invFields})
                    } else {
                        let invFields = this.state.invalidFields;
                        invFields[name]=false
                        this.setState({invalidFields:invFields})
                    }
                }
                else if(validator.ConditionType==='StringValue'){
                    let cond = `"${value}"`+validator.Condition;
                    console.log(cond);
                    if(eval(cond)){
                        this.setState({isFormValid:false})
                        this.setState({errorMessages:[...this.state.errorMessages,`${validator.PropertyName}:${validator.Message}`]})
                        let invFields = this.state.invalidFields;
                        invFields[name]=true
                        this.setState({invalidFields:invFields})
                    } else {
                        let invFields = this.state.invalidFields;
                        invFields[name]=false
                        this.setState({invalidFields:invFields})
                    }
                }
                else if(validator.ConditionType==='Length'){
                    let cond = `"${value}".length`+validator.Condition;
                    if(eval(cond)){
                        this.setState({isFormValid:false})
                        this.setState({errorMessages:[...this.state.errorMessages,`${validator.PropertyName}:${validator.Message}`]})
                        let invFields = this.state.invalidFields;
                        invFields[name]=true
                        this.setState({invalidFields:invFields})
                    } else {
                        let invFields = this.state.invalidFields;
                        invFields[name]=false
                        this.setState({invalidFields:invFields})
                    }    
                }
            }
        });
    }
    render() { 
        return ( 
            <div className="container">
                <form name="empForm">
                    <div className="form-group">
                        <label htmlFor="EmpNo">Emp No</label>
                        <input type="text" className="form-group" 
                        name="EmpNo"
                        value={this.state.EmpNo}
                        onChange={this.handleInputChanges.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="EmpName">Emp Name</label>
                        <input type="text" className="form-group" 
                        name="EmpName"
                        value={this.state.EmpName}
                        onChange={this.handleInputChanges.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <input type="button" disabled={!this.state.isFormValid} value="Save" className="btn btn-success"/>
                    </div>
                    <div>
                        {
                            Object.keys(this.state.invalidFields).map((f)=> {if(this.state.invalidFields[f])
                            return (f)
                            })
                            //this.state.errorMessages.map((m)=> <div className="alert alert-error">{m}</div>)
                        }
                    </div>
                </form>
            </div>
        );
    }
}
 
export default FormValidationComponent; 