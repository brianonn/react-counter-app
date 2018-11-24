import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 1 },
        { id: 2, value: 0 },
        { id: 3, value: 4 },
        { id: 4, value: 0 }
      ]
    };

    console.log("App - constructor");
  }

  componentDidMount() {
    // do ajax call here and set state
    console.log("App - mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log("counters:", counters);
    this.setState({ counters });
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; // shallow copy the object references in the array
    const index = counters.indexOf(counter); // find the index of this counter object in the copy
    counters[index] = { ...counter }; // replace it with a copy taken from the caller
    counters[index].value++; // increment it
    this.setState({ counters }); // set the new state
  };

  render() {
    console.log("App - rendered");
    return (
      <div className="App">
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
