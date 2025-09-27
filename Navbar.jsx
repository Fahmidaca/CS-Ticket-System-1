// src/components/Navbar.jsx
import React from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
    const handleNewTicket = () => {
        toast.success('New ticket creation initiated! Redirecting to form...');
        // TODO: Implement navigation to new ticket form or modal
    };

    return (
        <nav className="navbar">
            <div className="logo">CS - Ticket System</div>
            <div className="menu">
                <a href="#home">Home</a>
                <a href="#faq">FAQ</a>
                <a href="#changelog">Changelog</a>
                <a href="#blog">Blog</a>
                <a href="#download">Download</a>
                <a href="#contact">Contact</a>
                <button className="new-ticket-btn" onClick={handleNewTicket}>+ New Ticket</button>
            </div>
        </nav>
    );
};

export default Navbar;
