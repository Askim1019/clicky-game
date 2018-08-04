import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import cards from './cards.json';
import './App.css';
import Card from './components/Card';

class App extends Component {
  state = {
    cards: cards,
    currentScore: 0,
    topScore: 0,
    clickedCards: [],
    message: ""
  }




  render() {
    return (
      <div className="container-fluid">
        <Header 
          currentScore={0}
          totalScore={0}
        />
        <div className="container">
          {this.state.cards.map(card => (
          <Card
            key={card.id}
            name={card.name}
            image={card.image}
          />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
