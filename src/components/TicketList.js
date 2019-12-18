import React, { Component } from "react";
import Ticket from "./Ticket";
import "./TicketList.css";

class TicketList extends Component {
  render() {
    const { ticket, handleDelete } = this.props;
    return (
      <div className="TicketList">
        <h4>Your Selected Tickets:</h4>
        <div className="TicketList-ticket">
          {ticket.map(ticket => (
            <Ticket
              key={ticket.id}
              ticket={ticket}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TicketList;
