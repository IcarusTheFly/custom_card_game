import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Cards from './components/CardsComponent';
import './App.css';
import { CARDS } from './shared/cards';

export default class App extends Component {

  constructor (props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      cards: CARDS
      // isOpen: false
    }
  }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    return (
      <div>
        <Header />
        <Cards cards={this.state.cards}/>
        <Footer />
      </div>
    );
  }
}