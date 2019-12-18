import React from "react";
import "./App.css";
import Generator from "./components/Generator";
import TicketList from "./components/TicketList";
import uuid from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticket: [],
      input: "",
      id: uuid()
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.input.length < 6) {
      this.setState({
        input: this.state.input + e.target.name
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const newTicket = {
      id: this.state.id,
      ticket: this.state.input
    };

    if (this.state.input.length === 6 && this.state.ticket.length < 5) {
      const updatedTicket = [...this.state.ticket, newTicket];
      console.log(newTicket);
      this.setState({
        ticket: updatedTicket,
        input: "",
        id: uuid()
      });
    }
  };

  handleDelete = id => {
    const { ticket } = this.state;
    const sortedTicket = ticket.filter(t => t.id !== id);
    this.setState({
      ticket: sortedTicket
    });
  };

  inputCorrect = () => {
    let input = [...this.state.input];
    input.pop();
    let newInput = input.join("");

    this.setState({
      input: newInput
    });
  };

  inputDelete = () => {
    this.setState({
      input: ""
    });
  };

  randomGenerator = () => {
    const upper = 1000000;
    const lower = 100000;
    let number = Math.floor(Math.random() * (upper - lower + 1)) + lower;

    this.setState({
      input: number.toString(),
      id: uuid()
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <Generator
          handleChange={this.handleChange}
          input={this.state.input}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
          inputDelete={this.inputDelete}
          inputCorrect={this.inputCorrect}
          randomGenerator={this.randomGenerator}
        />
        <TicketList
          ticket={this.state.ticket}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
