import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import EmployeeForm from './employee/employeeForm';
import AllEmployees from './employee/AllEmployees';
import Header from './Header';

class App extends Component {
  state = {
    editEmployee: null,
    isLoggedIn: false
  }

  editEmployee = (employee) => {
    //this.props.dispatch({type:'SETEMPLOYEE',editEmployeeById: id});
    this.setState({editEmployee: employee});
  }
  checkLogin = (e) => {
    e.preventDefault();
    if(this.username.value == "admin" && this.password.value == "admin"){
      this.setState({isLoggedIn: true});
    }
    else{
      alert("Username or password wrong")
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-12 col-xs-12">
            { this.state.isLoggedIn ?
            <div>
            <AllEmployees editEmployeeById={this.editEmployee} />
            <EmployeeForm activeEmployee={this.state.editEmployee} />
            </div>
            : 
            <div>
              <div className="panel panel-default col-md-offset-3 col-md-4">
              <div className="panel-heading">Login</div>
            <div className="panel-body">
                <form  onSubmit={this.checkLogin}>
                  <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input required type="text" placeholder="Username" 
                        ref={(input) => this.username = input}
                        className="form-control"
                        id="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input required type="password" placeholder="Password" 
                        ref={(input) => this.password = input}     
                        className="form-control"                   
                        id="password"
                        />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
                </div>
                </div>
            </div>
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default  connect()(App);
