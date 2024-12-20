import React from 'react'
import { useState } from 'react'
import './App.css'

function Footer() {
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="https://imgs.search.brave.com/uCoR0rCguLJF3WdQ0mv8tUi3XAVp4t7GoQVIHY6jWEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL2lt/YWdlcy90X21haW4x/LHFfYXV0byxmX2F1/dG8scV9hdXRvLGZf/YXV0by9naWdzMi8y/MjE4ODA2MTMvb3Jp/Z2luYWwvZTQ0MTMy/OGZiMmI4MWI5Mzcz/ZDEzYmU0YjRhNTk3/NGE4MzUzMTRjZi9k/ZXNpZ24tYW4tZWNj/ZW50cmljLWxvZ28t/Zm9yLXlvdXItYnVz/aW5lc3MuanBn" alt="Brand Logo" />
            </div>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Team Eccentric</h2>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Resources</h2>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Community</h2>
            <ul className="footer-links">
              <li><a href="#">Forums</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Meetups</a></li>
              <li><a href="#">Open Source</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Stay Updated</h2>
            <form className="footer-form">
              <input type="email" className="footer-input" placeholder="Enter your email" />
              <button className="footer-button">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    );
}

export default Footer