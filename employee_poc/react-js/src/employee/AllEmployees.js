import React, {Component} from 'react';

import { connect } from 'react-redux';
import Employee from './Employee'
import ApiService from "../api/ApiService";

class AllEmployees extends Component{
    state = {
        employeeId: ""
    }

    componentDidMount(){
        ApiService.getAllEmployees().then(response => {
            this.props.dispatch({type: 'GET_ALL',data:response})
        })
    }

    data(id){
        console.log(id);
    }

    render(){
        return (
            <div className="col-md-8 col-sm-8 col-xs-12">
                <h1>All Employees</h1>
                    <table className="table table-striped table-table-responsive table-table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Street Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                                <th>Zip</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                    {this.props.employees.map((employee) => (
                        <Employee key={employee.id} employee={employee} activeEmployee={this.props.editEmployeeById}/>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state
    }
}

export default connect(mapStateToProps)(AllEmployees);