import React, { Component } from "react";
import Title from "./Title";
import { Link, withRouter } from "react-router-dom";

class AddSubscriber extends Component {
  state = {
    name: "",
    phone: ""
  };
  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const user = {};
    user.id=new Date().toISOString();
    user.name = this.state.name;
    user.phone = this.state.phone;
    this.props.onSubmit(user);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container-fluid">
        <Title title="AddSubscriber" />
        <Link className="btn btn-secondary" to={"/"}>
          Back
        </Link>
        <br />
        <br/>
        <form className="form-signin" onSubmit={this.onSubmit}>
          <div className="form-label-group">
          <label>Name:</label>
            <input
              type="text"
              id="inputEmail"
              className="form-control"
              placeholder="Your Name"
              required
              autoFocus
              onChange={this.handleNameChange}
            />
          </div>

          <div className="form-label-group">
          <label>Phone Number:</label>
            <input
              type="number"
              id="inputNumber"
              className="form-control"
              placeholder="Phone Number"
              required
              onChange={this.handlePhoneChange}
            />
          </div>
          <br/>
          <p className="text-info"><b>Subscriber to be Added:</b></p>
          <p className="text-muted">Name: {this.state.name}<br/>Phone: {this.state.phone}</p>
          <button className="btn btn-lg btn-primary btn-block" type="submit" >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(AddSubscriber);
