import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import data and components
import { tickets } from './tickets';
import Banner from './components/Banner';
import TicketList from './components/TicketList';
import TaskStatus from './components/TaskStatus';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder for CSS (use a real CSS/Tailwind file in your project)
import './App.css'; 

function App() {
    // 1. STATE MANAGEMENT
    const [allTickets, setAllTickets] = useState(tickets);
    // TaskStatus section only holds one ticket at a time
    const [inProgressTicket, setInProgressTicket] = useState(null); 
    const [resolvedList, setResolvedList] = useState([]);

    // 2. HANDLER FUNCTIONS

    // A. Handles clicking 'Open' on a ticket card to move it to Task Status
    const handleAddToTaskStatus = (ticket) => {
        if (inProgressTicket && inProgressTicket.id === ticket.id) {
            toast.info(`Ticket ${ticket.id} is already in progress.`);
            return;
        }

        setInProgressTicket(ticket);
        toast.success(`Ticket ${ticket.id} added to Task Status!`);
    };

    // B. Handles clicking 'Complete' in the Task Status section
    const handleCompleteTask = () => {
        if (!inProgressTicket) {
            toast.error('No ticket currently in progress to complete.');
            return;
        }

        const completedTicket = inProgressTicket;

        // 1. Add to Resolved List
        setResolvedList(prev => [...prev, completedTicket]);

        // 2. Remove from Customer Tickets (allTickets)
        setAllTickets(prev => prev.filter(t => t.id !== completedTicket.id));

        // 3. Remove from Task Status (In Progress)
        setInProgressTicket(null); 

        // 4. Show Toast Notification
        toast.success(`Ticket ${completedTicket.id} has been resolved and marked complete!`);
    };

    return (
        <div className="app-container">
            <Navbar />
            <Banner 
                inProgressCount={inProgressTicket ? 1 : 0} // Single ticket logic
                resolvedCount={resolvedList.length}
            />
            
            <main className="main-content-grid">
                {/* Left Side: Customer Tickets */}
                <TicketList 
                    tickets={allTickets} 
                    onSelectTicket={handleAddToTaskStatus} 
                />
                
                {/* Right Side: Task Status */}
                <TaskStatus
                    inProgressTicket={inProgressTicket}
                    resolvedList={resolvedList}
                    onCompleteTask={handleCompleteTask}
                />
            </main>
            
            <Footer />
            
            {/* React-Toastify Container */}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default App;
