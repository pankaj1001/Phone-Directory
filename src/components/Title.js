import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
        <nav className="site-header">
            <h3><span className="align-middle">{this.props.title}</span></h3>
        </nav>
    )
  }
}
