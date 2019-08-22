import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">Custom card game</NavbarBrand>
                        {/* <NavbarToggler onClick={this.toggle} /> */}
                        {/* <Collapse isOpen={this.state.isOpen} navbar> */}
                        <Nav className="mr-auto text-danger">
                            <NavItem> 
                                <NavLink href="#home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Cards</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
                            </NavItem>
                        </Nav>
                        {/* </Collapse> */}
                    </div>
                </Navbar>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Custom card game</h1>
                                <p>This is the card list for your custom card game!!!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;