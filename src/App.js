import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Rules from './components/Rules';
import About from './components/About';
import Cards from './components/Cards';
import './App.css';
import { CARDS } from './shared/cards';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

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
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/home" component={Rules} />
            <Route exact path="/cards" component={() => <Cards cards={this.state.cards}/>} />
            <Route path="/about" component={About} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}