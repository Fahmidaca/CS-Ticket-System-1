// src/components/TaskStatus.jsx
import React from 'react';

const TaskStatus = ({ inProgressTicket, resolvedList, onCompleteTask }) => {
    return (
        <section className="task-status-section">
            <h2>Task Status</h2>
            
            {/* 1. In Progress Ticket (Action Area) */}
            <div className="in-progress-task">
                {inProgressTicket ? (
                    <>
                        <p className="task-title">{inProgressTicket.title}</p>
                        <button className="complete-btn" onClick={onCompleteTask}>
                            Complete
                        </button>
                    </>
                ) : (
                    <p className="placeholder-text">Select a ticket to add to Task Status</p>
                )}
            </div>

            {/* 2. Resolved List */}
            <h2 className="resolved-heading">Resolved Task</h2>
            <div className="resolved-list">
                {resolvedList.length > 0 ? (
                    resolvedList.map(task => (
                        <div key={task.id} className="resolved-item">
                            {task.title}
                        </div>
                    ))
                ) : (
                    <p className="placeholder-text">No resolved tasks yet.</p>
                )}
            </div>
        </section>
    );
};

export default TaskStatus;