import React from 'react'
import { useState } from 'react'
import './App.css'

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log('Search query:', searchQuery);
    };

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <nav className="navbar">
        <div className="brand-logo">
          <img src="https://imgs.search.brave.com/uCoR0rCguLJF3WdQ0mv8tUi3XAVp4t7GoQVIHY6jWEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL2lt/YWdlcy90X21haW4x/LHFfYXV0byxmX2F1/dG8scV9hdXRvLGZf/YXV0by9naWdzMi8y/MjE4ODA2MTMvb3Jp/Z2luYWwvZTQ0MTMy/OGZiMmI4MWI5Mzcz/ZDEzYmU0YjRhNTk3/NGE4MzUzMTRjZi9k/ZXNpZ24tYW4tZWNj/ZW50cmljLWxvZ28t/Zm9yLXlvdXItYnVz/aW5lc3MuanBn" alt="Brand Logo" />
        </div>
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className="profile-button-container">
          <img src="https://imgs.search.brave.com/uCoR0rCguLJF3WdQ0mv8tUi3XAVp4t7GoQVIHY6jWEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL2lt/YWdlcy90X21haW4x/LHFfYXV0byxmX2F1/dG8scV9hdXRvLGZf/YXV0by9naWdzMi8y/MjE4ODA2MTMvb3Jp/Z2luYWwvZTQ0MTMy/OGZiMmI4MWI5Mzcz/ZDEzYmU0YjRhNTk3/NGE4MzUzMTRjZi9k/ZXNpZ24tYW4tZWNj/ZW50cmljLWxvZ28t/Zm9yLXlvdXItYnVz/aW5lc3MuanBn" alt="User Profile" />
        </div>
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <form onSubmit={handleSearchSubmit} className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-button">
              🔍
            </button>
          </form>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="search-bar">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-button">
                🔍
              </button>
            </form>
          </div>
          <button className="icon-button">🔔</button>
          <button className="icon-button">✉️</button>
          <div className="user-profile">
            <img src="https://imgs.search.brave.com/uCoR0rCguLJF3WdQ0mv8tUi3XAVp4t7GoQVIHY6jWEQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL2lt/YWdlcy90X21haW4x/LHFfYXV0byxmX2F1/dG8scV9hdXRvLGZf/YXV0by9naWdzMi8y/MjE4ODA2MTMvb3Jp/Z2luYWwvZTQ0MTMy/OGZiMmI4MWI5Mzcz/ZDEzYmU0YjRhNTk3/NGE4MzUzMTRjZi9k/ZXNpZ24tYW4tZWNj/ZW50cmljLWxvZ28t/Zm9yLXlvdXItYnVz/aW5lc3MuanBn" alt="User Profile" />
          </div>
        </div>
      </nav>
    );
  }

export default Navbar