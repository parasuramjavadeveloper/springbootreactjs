import React, { Component } from 'react';

import {connect} from 'react-redux';

class Employee extends Component {
    render() {
        return (          
            
            <tr>
                <td>{this.props.employee.id}</td>
                <td>{this.props.employee.fname}</td>
                <td>{this.props.employee.lname}</td>
                <td>{this.props.employee.age}</td>
                <td>{this.props.employee.address.street}</td>
                <td>{this.props.employee.address.city}</td>
                <td>{this.props.employee.address.state}</td>
                <td>{this.props.employee.address.country}</td>
                <td>{this.props.employee.address.zip}</td>
                <td>
                <button className="btn btn-primary" 
                onClick={ () => this.props.activeEmployee(this.props.employee)}
                >Edit</button>&nbsp;
                <button className="btn btn-danger" 
                onClick={() => this.props.dispatch({type:'DELETE_POST',id:this.props.employee.id})}>Delete</button>
                </td>
            </tr>
            
        );
    }
}

export default connect()(Employee);