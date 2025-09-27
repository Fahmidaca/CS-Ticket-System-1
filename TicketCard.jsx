import React from 'react';

const TicketCard = ({ ticket, onSelectTicket }) => {
  const getPriorityClass = () => {
    switch (ticket.priority) {
      case 'High': return 'high-priority';
      case 'Medium': return 'medium-priority';
      case 'Low': return 'low-priority';
      default: return 'low-priority';
    }
  };

  return (
    <div className="ticket-card">
      <div className="header">
        <h4>{ticket.title}</h4>
        <span className="status-badge open">Open</span>
      </div>
      <p className="description">{ticket.description}</p>
      <div className="footer-details">
        <span className={`priority-badge ${getPriorityClass()}`}>{ticket.priority}</span>
        <span className="customer-info">{ticket.customer} | {ticket.createdAt}</span>
      </div>
      <button className="select-btn" onClick={() => onSelectTicket(ticket)}>
        Add to Task Status
      </button>
    </div>
  );
};

export default TicketCard;
