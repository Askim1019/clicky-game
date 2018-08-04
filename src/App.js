import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Board from './components/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Board />
        <Footer />
      </div>
    );
  }
}

export default App;
