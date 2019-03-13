import React, { Component } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

export default class PhoneDirectory extends Component {
  handleDelete=(id)=>{
    this.props.onDelete(id);
  }
  getAllSubscribers() {
    let rows = this.props.contacts.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.phone}</td>
          <td>
            <input type="button" className="btn btn-danger" value="Delete" onClick={()=>this.handleDelete(user.id)} />
          </td>
        </tr>
      );
    });
    return rows;
  }
  render() {
    return (
      <div className="container-fluid">
        <Title title="Phone Directory" />
        <Link to={"/add"} className="btn btn-primary">Add</Link>
        <br/>
        <br/>
        <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact No.</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.getAllSubscribers()}</tbody>
        </table>
        </div>
      </div>
    );
  }
}
