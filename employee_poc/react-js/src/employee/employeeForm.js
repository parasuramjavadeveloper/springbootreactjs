import React, { Component } from 'react';
import {connect} from 'react-redux';
import ApiService from '../api/ApiService';
import employeeModel from './EmployeeModel';

class EmployeeForm extends Component{
    employeeForm = employeeModel;
    isEdited = false;
    state = {
        countries:[],
        isEdited: false
    }



    componentDidMount(){
        ApiService.getAllCountries().then(response => {
            this.setState({countries : response});
        });
        console.log(this.props.activeEmployee);
        this.setState({employeeId: this.props.activeEmployee})
        console.log("Data",this.props);
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.props.activeEmployee){
            this.isEdited = true;
            this.employeeForm.id.value = this.props.activeEmployee.id;
            this.employeeForm.fname.value = this.props.activeEmployee.fname;
            this.employeeForm.lname.value = this.props.activeEmployee.lname;
            this.employeeForm.age.value = this.props.activeEmployee.age;
            this.employeeForm.address.street.value = this.props.activeEmployee.address.street;
            this.employeeForm.address.city.value = this.props.activeEmployee.address.city;
            this.employeeForm.address.state.value = this.props.activeEmployee.address.state;
            this.employeeForm.address.country.value = this.props.activeEmployee.address.country;
            this.employeeForm.address.zip.value = this.props.activeEmployee.address.zip;
        }
    }
    onSubmitEmployee = (e) =>{
        e.preventDefault();
        const data = {
            id: this.employeeForm.id.value,
            fname: this.employeeForm.fname.value,
            lname: this.employeeForm.lname.value,
            age: this.employeeForm.age.value,
            address: {
                street: this.employeeForm.address.street.value,
                city: this.employeeForm.address.city.value,
                state: this.employeeForm.address.state.value,
                country: this.employeeForm.address.country.value,
                zip: this.employeeForm.address.zip.value
            },
            editing: false
        };
        if(this.isEdited){
            this.props.dispatch({
                type: 'EDIT_POST',
                data
            });
            this.isEdited = false;
        }
        else{
            this.props.dispatch({
                type: 'ADD_POST',
                data
            });
        }
        this.employeeForm.id.value = "";
        this.employeeForm.fname.value = "";
        this.employeeForm.lname.value = "";
        this.employeeForm.age.value = "";
        this.employeeForm.address.street.value = "";
        this.employeeForm.address.city.value = "";
        this.employeeForm.address.state.value = "";
        this.employeeForm.address.country.value = "";
        this.employeeForm.address.zip.value = "";
    }

    render(){
        return (
    <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="panel panel-default">
            <div className="panel-heading">Create Employee</div>
            <div className="panel-body">
                <form onSubmit={this.onSubmitEmployee}>
                    <div className="form-group">
                        <label htmlFor="id">Employee Id</label>
                        <input required type="number" placeholder="Employee Id" 
                        ref={(input) => this.employeeForm.id = input}
                        className="form-control"
                        id="id"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input required type="text" placeholder="First Name" 
                        ref={(input) => this.employeeForm.fname = input}
                        className="form-control"
                        id="fname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input required type="text" placeholder="Last Name" 
                        ref={(input) => this.employeeForm.lname = input}
                        className="form-control"
                        id="lname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input required type="number" placeholder="Age" 
                        ref={(input) => this.employeeForm.age = input}
                        className="form-control"
                        id="age"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="street">Street Address</label>
                        <input required type="text" placeholder="Street Address" 
                        ref={(input) => this.employeeForm.address.street = input}
                        className="form-control"
                        id="street"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input required type="text" placeholder="City" 
                        ref={(input) => this.employeeForm.address.city = input}
                        className="form-control"
                        id="city"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input required type="text" placeholder="State" 
                        ref={(input) => this.employeeForm.address.state = input}
                        className="form-control"
                        id="state"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        {/* <input required type="text" placeholder="Country" 
                        ref={(input) => this.employeeForm.address.country = input}
                        className="form-control"
                        id="country"
                        /> */}
                        <select required 
                        ref={(input) => this.employeeForm.address.country = input}
                        className="form-control"
                        id="country">                        
                            { this.state.countries.length > 0 && this.state.countries.map(country =>
                                <option key={country.alpha2_code}>{country.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip">Zip Code</label>
                        <input required type="number" placeholder="Zip Code" 
                        ref={(input) => this.employeeForm.address.zip = input}
                        className="form-control"
                        id="zip"
                        />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
        );
    }
}

export default connect()(EmployeeForm);