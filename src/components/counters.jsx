import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // object destructuring can make code cleaner
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-warning btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-success btn-sm m-2"
        >
          Reload
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
