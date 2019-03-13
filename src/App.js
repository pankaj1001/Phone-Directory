import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddSubscriber from "./components/AddSubscriber";
import PhoneDirectory from "./components/PhoneDirectory";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    contacts: [
      {
        id: "1",
        name: "Dafault 1",
        phone: "9009009009"
      },
      {
        id: "2",
        name: "Dafault 2",
        phone: "565465656"
      },
      {
        id: "3",
        name: "Dafault 3",
        phone: "8888888888"
      }
    ]
  };
  handleAddSubscriber = user => {
    let users = this.state.contacts;
    users.push(user);
    this.setState({
      contacts: users
    });
  };
  handleDelete = id => {
    let users = this.state.contacts.filter(function(user) {
      return user.id !== id;
    });
    this.setState({
      contacts: users
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/add"
            component={() => (
              <AddSubscriber onSubmit={this.handleAddSubscriber} />
            )}
          />
          <Route
            exact
            path="/"
            component={() => (
              <PhoneDirectory
                contacts={this.state.contacts}
                onDelete={this.handleDelete}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
