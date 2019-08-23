import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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

    const About = (props) => {
      return (
        <div>
          <h4>About us</h4>
        </div>
      );
    }

    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/cards" component={() => <Cards cards={this.state.cards}/>} />
            <Route path="/about" component={About} />
            <Redirect to="/cards" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}