// src/components/Banner.jsx
import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
        <header className="banner">
            <div className="stats-grid">
                <div className="stat-card purple">
                    <h3>In-Progress</h3>
                    <h1>{inProgressCount}</h1>
                </div>
                <div className="stat-card green">
                    <h3>Resolved</h3>
                    <h1>{resolvedCount}</h1>
                </div>
            </div>
        </header>
    );
};

export default Banner;
