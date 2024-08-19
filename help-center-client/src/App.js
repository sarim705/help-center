import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/cards')
      .then(response => {
        setCards(response.data);
        setFilteredCards(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cards!', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const query = event.target.value.toLowerCase();
    setFilteredCards(cards.filter(card => card.title.toLowerCase().includes(query)));
  };

  return (
    <div className="App">
      <header className="top-header">
        <div className="header-content">
          <div className="header-title">Abstract | Help Center</div>
          <button className="submit-request">Submit a request</button>
        </div>
      </header>
      
      <section className="search-section">
        <h1>How can we help?</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="search-button">&#8594;</button>
        </div>
      </section>

      <div className="cards-container">
        {filteredCards.map(card => (
          <Card key={card._id} title={card.title} description={card.description}  />
        ))}
      </div>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-column">
              <h4>Abstract</h4>
              <ul>
                <li>Branches</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>Blog</li>
                <li>Help Center</li>
                <li>Release Notes</li>
                <li>Status</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Community</h4>
              <ul>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>Dribbble</li>
                <li>Podcast</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Legal</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© Copyright 2024 Abstract Studio Design, Inc. All rights reserved</p>
            <p>Contact Us: info@abstract.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
