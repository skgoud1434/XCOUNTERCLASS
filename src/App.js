import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = (e) => {
    if (e.target.id === "inc") {
      this.setState((prev) => {
        return {
          count: prev.count + 1,
        };
      });
    } else {
      this.setState((prev) => {
        return {
          count: prev.count - 1,
        };
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button id="inc" onClick={(e) => this.handleClick(e)}>
          Increment
        </button>
        <button id="dec" onClick={(e) => this.handleClick(e)}>
          Decrement
        </button>
      </div>
    );
  }
}
