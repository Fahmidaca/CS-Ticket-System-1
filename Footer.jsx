// src/components/Footer.jsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content-grid">
                <div className="footer-about">
                    <h3>CS - Ticket System</h3>
                    <p>A simple ticketing system design based on Figma mockups for managing customer support requests.</p>
                </div>
                <div className="footer-links">
                    <h3>Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Our Mission</li>
                        <li>Contact Sales</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Services</h3>
                    <ul>
                        <li>Products & Services</li>
                        <li>Customer Stories</li>
                        <li>Download Apps</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Information</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Join Us</li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Social Links</h3>
                    <ul>
                        <li><FaTwitter style={{ color: 'white', fontSize: '1.2rem' }} /> @CS — Ticket System</li>
                        <li><FaLinkedin style={{ color: 'white', fontSize: '1.2rem' }} /> @CS — Ticket System</li>
                        <li><FaFacebook style={{ color: 'white', fontSize: '1.2rem' }} /> @CS — Ticket System</li>
                        <li><MdEmail style={{ color: 'white', fontSize: '1.2rem' }} /> support@cst.com</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                © 2025 CS - Ticket System. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;