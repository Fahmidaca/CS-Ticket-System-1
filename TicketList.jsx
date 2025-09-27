import React from 'react';
import TicketCard from './TicketCard';

const TicketList = ({ tickets, onSelectTicket }) => {
    return (
        <section className="customer-tickets">
            <h2>Customer Tickets</h2>
            <div className="ticket-grid">
                {tickets.length > 0 ? (
                    tickets.map(ticket => (
                        <TicketCard 
                            key={ticket.id} 
                            ticket={ticket} 
                            onSelectTicket={onSelectTicket} 
                        />
                    ))
                ) : (
                    <p>No open tickets remaining!</p>
                )}
            </div>
        </section>
    );
};

export default TicketList;
