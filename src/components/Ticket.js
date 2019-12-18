import React, { Component } from "react";
import "./Ticket.css";

class Ticket extends Component {
  render() {
    const { ticket, handleDelete } = this.props;
    return (
      <div className="Ticket">
        <h5>Ticket Id</h5>
        <p>{ticket.id}</p>
        <button onClick={() => handleDelete(ticket.id)}>
          <i className="fas fa-trash"></i>
        </button>
        <h3>{ticket.ticket}</h3>
      </div>
    );
  }
}

export default Ticket;
